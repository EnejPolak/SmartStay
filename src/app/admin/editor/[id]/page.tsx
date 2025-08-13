"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useAuthStore } from "@/admin/store/auth";
import { usePostsStore } from "@/admin/store/posts";
import Image from "next/image";

type ImageItem = { src: string; alt?: string };

const predefinedImages: ImageItem[] = [
  { src: "/pictures/logo/smartStay_logo.png", alt: "Logo" },
  { src: "/window.svg", alt: "Window" },
  { src: "/globe.svg", alt: "Globe" },
  { src: "/next.svg", alt: "Next" },
];

export default function EditorPage() {
  const params = useParams<{ id?: string }>();
  const postId = Array.isArray(params?.id) ? params?.id?.[0] : params?.id;
  const isNew = postId === "new";
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const { posts, addPost, updatePost } = usePostsStore();

  useEffect(() => {
    if (!isAuthenticated) router.replace("/admin");
  }, [isAuthenticated, router]);

  const existing = useMemo(() => posts.find((p) => p.id === postId), [posts, postId]);

  const [form, setForm] = useState({
    id: existing?.id || uuidv4(),
    imageUrl: existing?.imageUrl || "",
    title: existing?.title || "",
    subtitle: existing?.subtitle || "",
    tag: existing?.tag || "",
    description: existing?.description || "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm((f) => ({ ...f, imageUrl: String(reader.result) }));
    reader.readAsDataURL(file);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isNew) {
      addPost({ ...form });
    } else {
      updatePost(form.id, { ...form });
    }
    router.replace("/admin/dashboard");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{isNew ? "Nova objava" : "Uredi objavo"}</h1>
      </div>

      <form onSubmit={submit} className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div>
            <label className="mb-1 block text-sm text-zinc-300">Naslov</label>
            <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-[#8B7CDF] focus:ring-2 focus:ring-[#8B7CDF]/30" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-zinc-300">Podnaslov</label>
            <input value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} className="w-full rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-[#60A5FA] focus:ring-2 focus:ring-[#60A5FA]/30" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-zinc-300">Tag</label>
              <input value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })} className="w-full rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-[#8B7CDF] focus:ring-2 focus:ring-[#8B7CDF]/30" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-zinc-300">Opis (povzetek)</label>
              <input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-[#60A5FA] focus:ring-2 focus:ring-[#60A5FA]/30" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-zinc-300">Slika</label>
            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
              <div className="mb-3 flex items-center gap-3">
                <div className="h-16 w-16 rounded-lg bg-zinc-800" style={{ backgroundImage: form.imageUrl ? `url(${form.imageUrl})` : undefined, backgroundSize: "cover", backgroundPosition: "center" }} />
                <input type="file" accept="image/*" onChange={handleFileChange} className="text-xs text-zinc-400" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {predefinedImages.map((img) => (
                  <button key={img.src} type="button" onClick={() => setForm((f) => ({ ...f, imageUrl: img.src }))} className={`group relative overflow-hidden rounded-lg border ${form.imageUrl === img.src ? "border-[#8B7CDF]" : "border-white/10"}`}>
                    <Image src={img.src} alt={img.alt || "thumb"} width={200} height={200} className="h-16 w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button type="submit" className="flex-1 rounded-lg bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] px-4 py-2 text-sm font-medium text-white shadow-md shadow-[#8B7CDF]/20 hover:shadow-lg hover:shadow-[#8B7CDF]/30">
              {isNew ? "Dodaj objavo" : "Shrani spremembe"}
            </button>
            <button type="button" onClick={() => router.back()} className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-2 text-sm hover:border-[#8B7CDF]">
              Prekliči
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}


