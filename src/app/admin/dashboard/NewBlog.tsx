"use client";

import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import RichTextEditor from "@/app/admin/dashboard/RichTextEditor";

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

interface NewBlogProps {
  editId?: string | null;
  onPostCreated?: () => void;
}

export default function NewBlog({ editId, onPostCreated }: NewBlogProps) {
  const [showToast, setShowToast] = useState(false);
  const [form, setForm] = useState({
    id: uuidv4(),
    imageUrl: "",
    title: "",
    subtitle: "",
    tag: "",
    description: "",
    content: "",
    category: "",
    isDraft: false,
  });
  const [allTags, setAllTags] = useState<{ id: string; name: string }[]>([]);
  const [selectedTags, setSelectedTags] = useState<{ id: string; name: string }[]>([]);
  const [newTagNames, setNewTagNames] = useState<string[]>([]);

  // Category management (loaded dynamically from API)
  const [categories, setCategories] = useState<string[]>([]);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [slugState, setSlugState] = useState<{ value: string; available: boolean }>({ value: '', available: true });

  // Backend wiring refs
  const coverImageUrlRef = useRef<string | null>(null);
  const coverImageFileRef = useRef<File | null>(null);
  const currentBlogIdRef = useRef<string | null>(null);
  const slugCheckTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load tags for autocomplete and optionally prefill when editing
  useEffect(() => {
    (async () => {
      const r = await fetch('/api/tags');
      if (r.ok) setAllTags(await r.json());
    })();
  }, []);

  // Load categories from database for dropdown
  useEffect(() => {
    (async () => {
      try {
        const r = await fetch('/api/categories');
        if (!r.ok) return;
        const json = await r.json();
        const names: string[] = Array.isArray(json)
          ? Array.from(new Set(json.map((c: any) => String(c?.name || '')).filter((n: string) => n.trim().length > 0)))
          : [];
        setCategories(names);
      } catch {
        // ignore
      }
    })();
  }, []);

  useEffect(() => {
    if (!editId) return;
    (async () => {
      const res = await fetch(`/api/blogs/${editId}`);
      if (!res.ok) return;
      const b = await res.json();
      // Prefill form
      setForm((prev) => ({
        ...prev,
        id: b.id,
        imageUrl: b.cover_photo || "",
        title: b.title || "",
        subtitle: b.subtitle || "",
        description: b.description || b.excerpt || "",
        content: b.content_html || "",
        category: b.category?.name || "",
        isDraft: b.status === 'draft',
      }));
      // Keep dropdown strictly DB-backed: do not inject non-DB category names
      // Prefill tags
      const existingTagList: { id: string; name: string }[] = (b.tags || []).map((t: any) => ({ id: t.id, name: t.name }));
      setSelectedTags(existingTagList);
      setNewTagNames([]);
      // Slug state
      if (b.slug) setSlugState({ value: b.slug, available: true });
      // Cover in ref
      coverImageUrlRef.current = b.cover_photo || null;
      // Track that we're editing this blog
      currentBlogIdRef.current = b.id;
    })();
  }, [editId]);

  function addTagByName(name: string) {
    const n = name.trim();
    if (!n) return;
    const existing = allTags.find(t => t.name.toLowerCase() === n.toLowerCase());
    if (existing) {
      if (!selectedTags.find(t => t.id === existing.id)) {
        setSelectedTags([...selectedTags, existing]);
      }
      return;
    }
    if (!newTagNames.find(x => x.toLowerCase() === n.toLowerCase())) {
      setNewTagNames(prev => [...prev, n]);
    }
    if (!selectedTags.find(t => t.name.toLowerCase() === n.toLowerCase())) {
      setSelectedTags(prev => [...prev, { id: `temp:${n}`, name: n }]);
    }
  }

  function removeTag(id: string) {
    setSelectedTags(prev => prev.filter(t => t.id !== id));
    const tempName = id.startsWith('temp:') ? id.slice(5) : null;
    if (tempName) setNewTagNames(prev => prev.filter(n => n.toLowerCase() !== tempName.toLowerCase()));
  }

  const publish = async (e: React.FormEvent, asDraft = false) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    // Upload cover when saving if not uploaded yet
    if (!coverImageUrlRef.current && coverImageFileRef.current) {
      const fd = new FormData();
      fd.append('file', coverImageFileRef.current);
      const up = await fetch('/api/images/cover', { method: 'POST', body: fd });
      if (up.ok) {
        const img = await up.json();
        coverImageUrlRef.current = img.url as string;
        if (!form.imageUrl) setForm((f) => ({ ...f, imageUrl: img.url as string }));
      }
    }

    // Build payload
    // Resolve new tags (create them) only at submit time
    let tagIds: string[] = [];
    if (newTagNames.length) {
      const created: string[] = [];
      for (const n of newTagNames) {
        const r = await fetch('/api/tags', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: n }) });
        if (r.ok) {
          const t = await r.json();
          created.push(t.id);
        }
      }
      tagIds = created;
    }
    // Existing tags selected
    tagIds.push(
      ...selectedTags
        .filter(t => !String(t.id).startsWith('temp:'))
        .map(t => t.id)
    );

    const payload = {
      title: form.title.trim(),
      subtitle: form.subtitle?.trim() || null,
      description: form.description?.trim() || null,
      excerpt: null as string | null,
      slug: slugState.value || slugify(form.title),
      status: asDraft ? 'draft' : 'published',
      category_id: null as string | null, // will resolve below via categories API if needed
      cover_photo: coverImageUrlRef.current || null,
      content_html: form.content || '',
      content_delta: null as any,
      tags: Array.from(new Set(tagIds)).slice(0, 5),
    };

    // Map selected category name -> id (if present)
    if (form.category) {
      const res = await fetch('/api/categories', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: form.category }) });
      if (res.ok) {
        const cat = await res.json();
        payload.category_id = cat.id;
      }
    }

    const endpoint = currentBlogIdRef.current ? `/api/blogs/${currentBlogIdRef.current}` : '/api/blogs';
    const method = currentBlogIdRef.current ? 'PUT' : 'POST';
    const resp = await fetch(endpoint, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (!resp.ok) {
      // TODO: show inline error
      return;
    }
    const saved = await resp.json();
    currentBlogIdRef.current = saved.id;
    if (saved.slug) setSlugState({ value: saved.slug, available: true });

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
    
    // Reset form for new post if we were creating; if editing, keep context
    if (!editId) {
      setForm({
        id: uuidv4(),
        imageUrl: "",
        title: "",
        subtitle: "",
        tag: "",
        description: "",
        content: "",
        category: "",
        isDraft: false,
      });
      setSelectedTags([]);
      setNewTagNames([]);
      setSlugState({ value: '', available: true });
      coverImageUrlRef.current = null;
      coverImageFileRef.current = null;
      currentBlogIdRef.current = null;
    }
    
    // Notify parent component
    if (onPostCreated) onPostCreated();
  };

  const saveDraft = (e: React.FormEvent) => { void publish(e, true); };

  const handleAddCategory = () => {
    if (newCategoryName.trim() && !categories.includes(newCategoryName.trim())) {
      const newCategory = newCategoryName.trim();
      setCategories(prev => [...prev, newCategory]);
      setForm(prev => ({ ...prev, category: newCategory }));
      setNewCategoryName("");
      setIsAddingCategory(false);
    }
  };

  const handleCancelAddCategory = () => {
    setNewCategoryName("");
    setIsAddingCategory(false);
  };

  return (
    <>
      <div className="mx-auto max-w-4xl space-y-6">
        <form onSubmit={publish} className="space-y-6">
          {/* Cover Image Section */}
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Cover Image</h3>
              <span className="text-xs text-zinc-500">Choose your main blog image</span>
            </div>
            
            <div className="space-y-4">
              {form.imageUrl ? (
                <div className="relative group">
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-zinc-800">
                    <img src={form.imageUrl} alt="Cover" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={() => setForm(f => ({ ...f, imageUrl: "" }))}
                      className="rounded-md bg-black/60 p-2 text-white hover:bg-red-600/80"
                      title="Remove cover image"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => document.getElementById("cover-file-input")?.click()}
                  className="flex h-48 cursor-pointer items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 text-sm text-zinc-400 transition-all hover:bg-white/10 hover:border-violet-400/50"
                >
                  <div className="text-center">
                    <svg className="mx-auto mb-3 h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="font-medium text-white mb-1">Upload cover image</p>
                    <p className="text-xs text-zinc-500">JPG, PNG, WebP up to 10MB • Recommended: 1200x630px</p>
                  </div>
                </div>
              )}
              
              <input
                id="cover-file-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    coverImageFileRef.current = file;
                    const reader = new FileReader();
                    reader.onload = () => setForm(f => ({ ...f, imageUrl: String(reader.result) }));
                    reader.readAsDataURL(file);
                  }
                }}
              />
              
              <p className="text-xs text-zinc-400">
                This will be the main image for your blog post. You can add more images directly in the content editor below.
              </p>
            </div>
          </div>

          {/* Basic Information Section */}
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Basic Information</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">Title</label>
                  <input 
                    value={form.title} 
                    onChange={async (e) => {
                      const title = e.target.value;
                      setForm({ ...form, title });
                      if (slugCheckTimerRef.current) clearTimeout(slugCheckTimerRef.current);
                      slugCheckTimerRef.current = setTimeout(async () => {
                        const s = slugify(title);
                        if (s) {
                          const r = await fetch(`/api/blogs?slug=${encodeURIComponent(s)}${currentBlogIdRef.current ? `&excludeId=${currentBlogIdRef.current}` : ''}`);
                          const json = await r.json();
                          setSlugState({ value: s, available: !json.exists });
                        } else {
                          setSlugState({ value: '', available: true });
                        }
                      }, 250);
                    }} 
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-400/50 transition-all" 
                    placeholder="Enter an engaging title for your blog post" 
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">Slug</label>
                  <div className="relative">
                    <input
                      value={slugState.value}
                      onChange={async (e) => {
                        const v = slugify(e.target.value);
                        setSlugState((s) => ({ ...s, value: v }));
                        const r = await fetch(`/api/blogs?slug=${encodeURIComponent(v)}${currentBlogIdRef.current ? `&excludeId=${currentBlogIdRef.current}` : ''}`);
                        const json = await r.json();
                        setSlugState({ value: v, available: !json.exists });
                      }}
                      className={`w-full rounded-xl border px-4 py-3 text-white outline-none focus:ring-2 ${slugState.available ? 'border-white/10 bg-zinc-900 focus:ring-green-500/40' : 'border-red-500/40 bg-red-500/10 focus:ring-red-400/40'}`}
                      placeholder="auto-generated-from-title"
                    />
                    <span className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs ${slugState.available ? 'text-green-400' : 'text-red-400'}`}>
                      {slugState.available ? 'available' : 'taken'}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-500">You can edit the slug; uniqueness is checked automatically.</p>
                </div>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">Subtitle</label>
                <input 
                  value={form.subtitle} 
                  onChange={(e) => setForm({ ...form, subtitle: e.target.value })} 
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-400/50 transition-all" 
                  placeholder="A brief subtitle or tagline" 
                />
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">Tags</label>
                  <div className="rounded-xl border border-white/10 bg-zinc-900 px-3 py-2">
                    <div className="flex flex-wrap gap-2">
                      {selectedTags.map(tag => (
                        <span key={tag.id} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-800 px-3 py-1 text-xs text-zinc-200">
                          {tag.name}
                          <button type="button" onClick={() => removeTag(tag.id)} className="text-zinc-400 hover:text-red-400">×</button>
                        </span>
                      ))}
                      <input
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            const name = (e.currentTarget.value || '').trim();
                            if (name) addTagByName(name);
                            e.currentTarget.value = '';
                          }
                        }}
                        list="tag-suggestions"
                        className="flex-1 min-w-[140px] bg-transparent py-1 px-2 text-sm text-white placeholder-gray-500 outline-none"
                        placeholder="Type and press Enter to add"
                      />
                      <datalist id="tag-suggestions">
                        {allTags.map(t => (
                          <option key={t.id} value={t.name} />
                        ))}
                      </datalist>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-zinc-500">Up to 5 tags. Type a name and press Enter to add. New tags will be created automatically.</p>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">Category</label>
                  {isAddingCategory ? (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddCategory();
                          }
                          if (e.key === 'Escape') {
                            handleCancelAddCategory();
                          }
                        }}
                        className="flex-1 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-400/50 transition-all"
                        placeholder="Enter new category name"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={handleAddCategory}
                        disabled={!newCategoryName.trim()}
                        className="rounded-xl bg-violet-600 px-4 py-3 text-white hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        ✓
                      </button>
                      <button
                        type="button"
                        onClick={handleCancelAddCategory}
                        className="rounded-xl border border-white/20 bg-zinc-800 px-4 py-3 text-white hover:bg-zinc-700 transition-all"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div className="relative">
                      <select 
                        value={form.category}
                        onChange={(e) => {
                          if (e.target.value === "add-new") {
                            setIsAddingCategory(true);
                          } else {
                            setForm({ ...form, category: e.target.value });
                          }
                        }}
                        className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-violet-400/50 transition-all"
                      >
                        <option value="">Select category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                        <option value="add-new" className="border-t border-zinc-600 bg-violet-900/20 text-violet-300">
                          + Add new category
                        </option>
                      </select>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">Description</label>
                <textarea 
                  value={form.description} 
                  onChange={(e) => setForm({ ...form, description: e.target.value })} 
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-400/50 transition-all resize-none" 
                  rows={3} 
                  placeholder="A short summary of your blog post for SEO and previews" 
                />
              </div>
            </div>
          </div>

          {/* Blog Content Section */}
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Blog Content</h3>
            <RichTextEditor
              value={form.content}
              onChange={(content) => setForm({ ...form, content })}
              placeholder="Write your blog content here..."
              height={500}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm text-zinc-400">
              {form.title ? `Ready to publish "${form.title}"` : "Complete the form to publish your post"}
            </div>
            <div className="flex items-center gap-3">
              <button 
                type="button"
                onClick={saveDraft}
                disabled={!form.title.trim()}
                className="rounded-xl border border-white/20 bg-zinc-800 px-6 py-2.5 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Save Draft
              </button>
              <button 
                type="submit"
                disabled={!form.title.trim()}
                className="rounded-xl bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Publish Post
              </button>
            </div>
          </div>
        </form>

        {/* Live Preview Section */}
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Live Preview</h3>
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
            {form.imageUrl && (
              <div className="mb-6 h-64 w-full overflow-hidden rounded-lg bg-zinc-800">
                <img src={form.imageUrl} alt="Cover" className="h-full w-full object-cover" />
              </div>
            )}
            
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-white leading-tight">
                    {form.title || "Your Blog Post Title"}
                  </h1>
                  {form.subtitle && (
                    <p className="mt-2 text-lg text-zinc-300">{form.subtitle}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  {form.tag && (
                    <span className="rounded-full border border-violet-400/30 bg-violet-600/20 px-3 py-1 text-sm text-violet-300">
                      {form.tag}
                    </span>
                  )}
                  {form.category && (
                    <span className="rounded-full border border-blue-400/30 bg-blue-600/20 px-3 py-1 text-sm text-blue-300">
                      {form.category}
                    </span>
                  )}
                </div>
              </div>
              
              {form.description && (
                <p className="text-zinc-400 leading-relaxed">{form.description}</p>
              )}
              
              {form.content && (
                <div className="mt-6 border-t border-white/10 pt-6">
                  <div 
                    className="prose prose-invert prose-zinc max-w-none"
                    dangerouslySetInnerHTML={{ __html: form.content }}
                  />
                </div>
              )}
              
              {!form.title && !form.subtitle && !form.description && !form.content && (
                <div className="py-12 text-center text-zinc-500">
                  Start writing to see your preview here...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-2 text-sm text-green-300 shadow-lg backdrop-blur">
          ✅ Post Published!
        </div>
      )}
    </>
  );
}
