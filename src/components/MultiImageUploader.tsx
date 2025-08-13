"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy, useSortable, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export type UploadImage = {
  id: string;
  file: File | null;
  url: string;
  name: string;
};

type MultiImageUploaderProps = {
  images?: UploadImage[];
  onChange?: (images: UploadImage[]) => void;
  enableLocalStorage?: boolean;
  storageKey?: string;
  className?: string;
};

function SortableThumb({ image, index, onRemove }: { image: UploadImage; index: number; onRemove: (id: string) => void }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: image.id });
  const style = { transform: CSS.Transform.toString(transform), transition } as React.CSSProperties;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow hover:ring-2 hover:ring-violet-400"
    >
      {/* image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image.url} alt={image.name} className="h-full w-full object-cover" />
      {/* remove button */}
      <button
        type="button"
        onClick={() => onRemove(image.id)}
        className="absolute right-2 top-2 rounded-md border border-white/10 bg-black/60 px-2 py-1 text-xs text-zinc-200 hover:border-white/20"
      >
        ❌
      </button>
      {/* position badge */}
      <div className="absolute bottom-2 left-2 rounded-md border border-white/10 bg-black/60 px-2 py-0.5 text-[10px] text-zinc-200">
        {index + 1}.
      </div>
    </div>
  );
}

export default function MultiImageUploader({ images: initial, onChange, enableLocalStorage = false, storageKey = "smartstay-multi-images", className, }: MultiImageUploaderProps) {
  const [images, setImages] = useState<UploadImage[]>(() => {
    if (enableLocalStorage && typeof window !== "undefined") {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        try {
          const parsed = JSON.parse(raw) as UploadImage[];
          return parsed;
        } catch {}
      }
    }
    return initial || [];
  });

  useEffect(() => {
    if (enableLocalStorage) {
      localStorage.setItem(storageKey, JSON.stringify(images));
    }
    onChange?.(images);
  }, [images, enableLocalStorage, storageKey, onChange]);

  const handleFiles = useCallback((fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    const next: UploadImage[] = [];
    Array.from(fileList).forEach((file) => {
      if (!file.type.startsWith("image/")) return;
      const url = URL.createObjectURL(file);
      next.push({ id: uuidv4(), file, url, name: file.name });
    });
    setImages((prev) => [...prev, ...next]);
  }, []);

  const onDropArea: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.length ? e.dataTransfer.files : null;
    if (file) handleFiles(file);
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = images.findIndex((img) => img.id === active.id);
    const newIndex = images.findIndex((img) => img.id === over.id);
    setImages((items) => arrayMove(items, oldIndex, newIndex));
  };

  const removeImage = (id: string) => setImages((prev) => prev.filter((i) => i.id !== id));

  const hasImages = images.length > 0;

  return (
    <div className={className}>
      {/* Drop / Select Area */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDropArea}
        className="mb-4 flex h-36 cursor-pointer items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/5 text-sm text-zinc-400 transition hover:bg-white/10"
        onClick={() => document.getElementById("multi-file-input")?.click()}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">➕</span>
          <span>Add images (drag & drop or click)</span>
        </div>
        <input id="multi-file-input" type="file" multiple accept="image/*" className="hidden" onChange={(e) => handleFiles(e.target.files)} />
      </div>

      {/* Gallery */}
      {!hasImages ? (
        <div className="rounded-xl border border-white/10 bg-black/30 p-6 text-center text-sm text-zinc-400">No images added yet</div>
      ) : (
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={images.map((i) => i.id)} strategy={rectSortingStrategy}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {images.map((img, idx) => (
                <div key={img.id} className="animate-fade-in-up">
                  <SortableThumb image={img} index={idx} onRemove={removeImage} />
                </div>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}

      {/* Actions */}
      <div className="mt-4 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => setImages([])}
          className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-2 text-sm text-zinc-200 hover:border-[#8B7CDF]"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={() => onChange?.(images)}
          className="rounded-xl bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA] px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
        >
          Save Order
        </button>
      </div>
    </div>
  );
}


