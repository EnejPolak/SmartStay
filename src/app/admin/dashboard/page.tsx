"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Link from "next/link";
import { useAuthStore } from "@/admin/store/auth";
import { usePostsStore, type BlogPost } from "@/admin/store/posts";
import MultiImageUploader, { type UploadImage } from "@/app/admin/dashboard/MultiImageUploader";

function SortablePostItem({ post, index, onDelete }: { post: BlogPost; index: number; onDelete: (id: string) => void }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: post.id });
  const style = { transform: CSS.Transform.toString(transform), transition } as React.CSSProperties;

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="group flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900/60 p-4 hover:border-white/20">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 shrink-0 rounded-lg bg-zinc-800" style={{ backgroundImage: post.imageUrl ? `url(${post.imageUrl})` : undefined, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div>
          <div className="flex items-center gap-2">
            <p className="font-medium">{post.title || "(Untitled)"}</p>
            {index === 0 && (
              <span className="rounded-md bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] px-2 py-0.5 text-xs text-white">🔥 Featured Post (1st)</span>
            )}
          </div>
          <p className="text-xs text-zinc-400">{post.subtitle}</p>
          {post.tag && <span className="mt-1 inline-block rounded-md border border-white/10 bg-zinc-800/60 px-2 py-0.5 text-[10px] text-zinc-300">{post.tag}</span>}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Link href={`/admin/editor/${post.id}`} className="rounded-md border border-white/10 bg-zinc-800 px-3 py-1.5 text-sm hover:border-[#8B7CDF]">Edit</Link>
        <button onClick={() => onDelete(post.id)} className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-sm text-red-300 hover:border-red-400/50">Delete</button>
        <span className="cursor-grab rounded-md border border-white/10 bg-zinc-800/60 px-2 py-1 text-xs text-zinc-300 group-hover:border-white/20">Drag</span>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const { isAuthenticated, username, logout } = useAuthStore();
  const { posts, addPost, reorderPosts, deletePost } = usePostsStore();

  const [activeTab, setActiveTab] = useState<"new" | "all">("new");
  const [showToast, setShowToast] = useState(false);
  const [form, setForm] = useState({
    id: uuidv4(),
    imageUrl: "",
    title: "",
    subtitle: "",
    tag: "",
    description: "",
  });
  const [gallery, setGallery] = useState<UploadImage[]>([]);

  useEffect(() => {
    if (!isAuthenticated) router.replace("/admin");
  }, [isAuthenticated, router]);

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = posts.findIndex((p) => p.id === active.id);
    const newIndex = posts.findIndex((p) => p.id === over.id);
    const ordered = arrayMove(posts, oldIndex, newIndex).map((p) => p.id);
    reorderPosts(ordered);
  };

  const handleFileSelect = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm((f) => ({ ...f, imageUrl: String(reader.result) }));
    reader.readAsDataURL(file);
  };

  const onDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    handleFileSelect(file);
  };

  const publish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    addPost({ ...form });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
    // reset form
    setForm({ id: uuidv4(), imageUrl: "", title: "", subtitle: "", tag: "", description: "" });
    setGallery([]);
    setActiveTab("all");
  };

  return (
    <div className="relative -mx-4 -my-8 px-4 py-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-violet-600/30 to-blue-600/30" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "16px 16px" }} />

      <div className="mx-auto max-w-6xl space-y-6 animate-fade-in-up">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Welcome, {username || "admin"}</h1>
            <p className="text-sm text-zinc-400">Create, manage and reorder your posts</p>
          </div>
          <button onClick={logout} className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-2 text-sm hover:border-[#8B7CDF]">Logout</button>
        </div>

        <div className="sticky top-0 z-10 -mx-4 border-b border-white/10 bg-black/20 px-4 backdrop-blur">
          <div className="flex gap-4">
            <button onClick={() => setActiveTab("new")} className={`relative px-3 py-3 text-sm font-medium text-zinc-300 hover:text-white ${activeTab === "new" ? "text-white" : ""}`}>
              New Blog Post
              {activeTab === "new" && <span className="absolute inset-x-0 -bottom-px block h-0.5 rounded-full bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA]" />}
            </button>
            <button onClick={() => setActiveTab("all")} className={`relative px-3 py-3 text-sm font-medium text-zinc-300 hover:text-white ${activeTab === "all" ? "text-white" : ""}`}>
              All Posts
              {activeTab === "all" && <span className="absolute inset-x-0 -bottom-px block h-0.5 rounded-full bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA]" />}
            </button>
          </div>
        </div>

        {activeTab === "new" ? (
          <form onSubmit={publish} className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <label className="mb-2 block text-sm text-zinc-300">Add photo</label>
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={onDrop}
                  className="flex h-40 cursor-pointer items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 text-sm text-zinc-400 hover:bg-white/10"
                  onClick={() => document.getElementById("file-input")?.click()}
                >
                  {form.imageUrl ? (
                    <div className="relative h-full w-full overflow-hidden rounded-xl">
                      <img src={form.imageUrl} alt="preview" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 flex items-end justify-end p-2">
                        <button type="button" onClick={() => setForm((f) => ({ ...f, imageUrl: "" }))} className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-xs text-zinc-200 hover:border-white/20">Remove</button>
                      </div>
                    </div>
                  ) : (
                    <span>Drag & drop image here, or click to upload</span>
                  )}
                  <input id="file-input" type="file" accept="image/*" className="hidden" onChange={(e) => handleFileSelect(e.target.files?.[0])} />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 space-y-4">
                <div>
                  <label className="mb-1 block text-sm text-zinc-300">Title</label>
                  <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-400/50" placeholder="Enter title" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-zinc-300">Subtitle</label>
                  <input value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-400/50" placeholder="Enter subtitle" />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm text-zinc-300">Tag</label>
                    <input value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-400/50" placeholder="e.g. tips, guest experience" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-zinc-300">Description</label>
                    <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-400/50" rows={3} placeholder="Short summary" />
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <button type="submit" className="rounded-xl bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] px-6 py-2 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105">Publish</button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <MultiImageUploader images={gallery} onChange={setGallery} className="rounded-2xl border border-white/10 bg-black/30 p-4" />
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <h3 className="mb-3 text-sm font-medium text-zinc-300">Live Preview</h3>
                <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-4">
                  <div className="mb-3 h-40 w-full overflow-hidden rounded-lg bg-zinc-800" style={{ backgroundImage: form.imageUrl ? `url(${form.imageUrl})` : undefined, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-semibold">{form.title || "(Preview title)"}</h4>
                      {form.tag && <span className="rounded-md border border-white/10 bg-zinc-800/60 px-2 py-0.5 text-[10px] text-zinc-300">{form.tag}</span>}
                    </div>
                    <p className="text-sm text-zinc-400">{form.subtitle || "(Preview subtitle)"}</p>
                    <p className="text-xs text-zinc-500">{form.description || "(Short description preview)"}</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            {posts.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/30 py-14 text-zinc-400">
                <p>No posts yet. Publish your first post.</p>
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                  <SortableContext items={posts.map((p) => p.id)} strategy={verticalListSortingStrategy}>
                    <div className="space-y-3">
                      {posts.map((post, idx) => (
                        <SortablePostItem key={post.id} post={post} index={idx} onDelete={deletePost} />
                      ))}
                    </div>
                  </SortableContext>
                </DndContext>
              </div>
            )}
          </div>
        )}

        {showToast && (
          <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-2 text-sm text-green-300 shadow-lg backdrop-blur">
            ✅ Post Published!
          </div>
        )}
      </div>
    </div>
  );
}


