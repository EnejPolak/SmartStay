"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FALLBACK_IMAGE = "/pictures/logo/smartStay_logo.png";

type BlogItem = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  summary: string | null;
  content_html?: string | null;
  cover_photo: string | null;
  published_at: string;
  category_name: string | null;
  category_slug: string | null;
  read_minutes?: number;
};

type BlogListResponse = {
  hero: BlogItem | null;
  latest: BlogItem[];
  pagination: { limit: number; offset: number; total: number };
};

function formatDatePretty(dateString: string) {
  const d = new Date(dateString);
  const fmt = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  return fmt.format(d);
}

function SkeletonCard() {
  return (
    <div className="group h-full flex flex-col relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/50 to-slate-900/50 backdrop-blur-xl ring-1 ring-white/10 animate-pulse">
      <div className="relative w-full h-56 md:h-64 xl:h-72 overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5" />
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="h-4 w-40 bg-white/10 rounded mb-3" />
        <div className="h-7 w-4/5 bg-white/10 rounded mb-2" />
        <div className="h-7 w-3/5 bg-white/10 rounded mb-4" />
        <div className="h-4 w-full bg-white/10 rounded mb-2" />
        <div className="h-4 w-2/3 bg-white/10 rounded" />
      </div>
    </div>
  );
}

function SpinnerInline() {
  return <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/70 border-t-transparent align-middle" />;
}

function AdminBlogCard({ post, onEdit, onDelete, deleting }: { post: BlogItem; onEdit: (id: string) => void; onDelete: (id: string) => void; deleting?: boolean; }) {
  return (
    <div className="group h-full flex flex-col relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/50 to-slate-900/50 backdrop-blur-xl ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.07] transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-violet-400/60 after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
      {/* Image */}
      <div className="relative w-full h-56 md:h-64 xl:h-72 overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
        {post.cover_photo ? (
          <Image
            src={post.cover_photo}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
            <svg className="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-600/90 text-white px-3 py-1 text-xs font-medium ring-1 ring-white/20 backdrop-blur shadow-sm">
            {post.category_name || 'General'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        {/* Meta */}
        <div className="flex items-center gap-2 text-sm text-white/60 tracking-tight">
          <span>{formatDatePretty(post.published_at)}</span>
          {post.read_minutes ? (<><span className="opacity-50">•</span><span>{post.read_minutes} min read</span></>) : null}
        </div>

        {/* Title */}
        <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white leading-tight">
          {post.title}
        </h3>

        {/* Excerpt */}
        {post.summary && (
          <p className="mt-2 text-white/70 line-clamp-3">{post.summary}</p>
        )}

        {/* Separator */}
        <div className="my-5 h-px bg-white/10" />

        {/* Footer (author chip) */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
              S
            </div>
            <span className="text-white/80 text-sm font-medium">SmartStay Team</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => onEdit(post.id)}
            className="inline-flex items-center gap-2 rounded-full bg-amber-500/80 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-amber-600/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400/60"
            aria-label={`Edit ${post.title}`}
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(post.id)}
            disabled={!!deleting}
            className="inline-flex items-center gap-2 rounded-full bg-rose-500/80 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-rose-600/80 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-400/60"
            aria-label={`Delete ${post.title}`}
          >
            {deleting && <SpinnerInline />}<span className={deleting ? 'ml-2' : ''}>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AllPosts(props: { onPostDeleted?: () => void } = {}) {
  const router = useRouter();
  const [data, setData] = useState<BlogListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteModal, setDeleteModal] = useState<{ show: boolean; post: BlogItem | null }>({ show: false, post: null });

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const res = await fetch('/api/blogs');
        if (!res.ok) throw new Error('Failed to load blogs');
        const json: BlogListResponse = await res.json();
        if (isMounted) setData(json);
      } catch (e: any) {
        if (isMounted) setError(e?.message || 'Unexpected error');
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => { isMounted = false; };
  }, []);

  const items: BlogItem[] = useMemo(() => {
    const combined: BlogItem[] = [];
    if (data?.hero) combined.push(data.hero);
    if (data?.latest?.length) combined.push(...data.latest);
    return combined;
  }, [data]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((p) => p.title.toLowerCase().includes(q) || (p.summary || '').toLowerCase().includes(q));
  }, [items, query]);

  function handleEdit(id: string) {
    router.push(`/admin/dashboard?edit=${encodeURIComponent(id)}#new`);
  }

  function handleDelete(id: string) {
    const post = items.find(p => p.id === id);
    if (post) {
      setDeleteModal({ show: true, post });
    }
  }

  async function confirmDelete() {
    if (!deleteModal.post) return;
    const id = deleteModal.post.id;
    try {
      setDeletingId(id);
      setDeleteModal({ show: false, post: null });
      const delRes = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      if (!delRes.ok) throw new Error('Failed to delete');
      // Optimistically remove from list
      setData((prev) => {
        if (!prev) return prev;
        const all: BlogItem[] = [];
        if (prev.hero && prev.hero.id !== id) all.push(prev.hero);
        if (prev.latest?.length) all.push(...prev.latest.filter((p) => p.id !== id));
        return { hero: all[0] || null, latest: all.slice(1), pagination: prev.pagination } as BlogListResponse;
      });
      props.onPostDeleted?.();
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert('Failed to delete post');
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">All Posts</h2>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title or description"
          className="w-64 rounded-full border border-white/10 bg-zinc-900/80 px-4 py-2 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-400/40"
        />
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300 flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => location.reload()} className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/20">Retry</button>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <AdminBlogCard key={post.id} post={post} onEdit={handleEdit} onDelete={handleDelete} deleting={deletingId === post.id} />
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModal.show && deleteModal.post && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-gradient-to-b from-gray-900 to-slate-900 rounded-2xl shadow-2xl ring-1 ring-white/10 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Delete Blog Post</h3>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-4 space-y-4">
              <p className="text-white/80">
                Are you sure you want to delete <span className="font-semibold text-white">"{deleteModal.post.title}"</span>?
              </p>
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 space-y-2">
                <p className="text-red-300 font-medium text-sm">⚠️ This action will:</p>
                <ul className="text-red-200/80 text-sm space-y-1 ml-4">
                  <li>• Permanently delete the blog post</li>
                  <li>• Remove it from the public website</li>
                  <li>• Make it inaccessible to visitors</li>
                </ul>
                <p className="text-red-300 font-medium text-sm mt-3">This action cannot be undone.</p>
              </div>
            </div>

            {/* Actions */}
            <div className="px-6 py-4 bg-white/5 flex items-center justify-end gap-3">
              <button
                onClick={() => setDeleteModal({ show: false, post: null })}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={!!deletingId}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 disabled:opacity-60 rounded-lg transition-colors flex items-center gap-2"
              >
                {deletingId === deleteModal.post.id && <SpinnerInline />}
                Delete Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
