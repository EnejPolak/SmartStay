"use client";

import { useCallback, useEffect, useState } from "react";
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
  onCoverChange?: (coverImageUrl: string) => void;
  enableLocalStorage?: boolean;
  storageKey?: string;
  className?: string;
  maxImages?: number;
};

function SortableThumb({ 
  image, 
  index, 
  onRemove, 
  onSetCover, 
  isCover 
}: { 
  image: UploadImage; 
  index: number; 
  onRemove: (id: string) => void;
  onSetCover: (id: string) => void;
  isCover: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: image.id });
  const style = { transform: CSS.Transform.toString(transform), transition } as React.CSSProperties;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`group relative aspect-square w-full overflow-hidden rounded-xl border transition-all hover:border-white/30 ${
        isCover ? "border-violet-400 ring-2 ring-violet-400/30" : "border-white/10"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image.url} alt={image.name} className="h-full w-full object-cover" />
      
      {/* Cover badge */}
      {isCover && (
        <div className="absolute top-2 left-2 rounded-full bg-violet-600 px-2 py-1 text-xs font-medium text-white shadow-lg">
          Cover
        </div>
      )}
      
      {/* Action buttons */}
      <div className="absolute top-2 right-2 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        {!isCover && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSetCover(image.id);
            }}
            className="rounded-md bg-black/60 p-1.5 text-white hover:bg-violet-600/80"
            title="Set as cover"
          >
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </button>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(image.id);
          }}
          className="rounded-md bg-black/60 p-1.5 text-white hover:bg-red-600/80"
          title="Remove image"
        >
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {/* Position indicator */}
      <div className="absolute bottom-2 left-2 rounded bg-black/60 px-1.5 py-0.5 text-xs text-white">
        {index + 1}
      </div>
      
      {/* Drag handle */}
      <div className="absolute bottom-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="rounded bg-black/60 p-1">
          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 3h2v2H9V3zm4 0h2v2h-2V3zM9 7h2v2H9V7zm4 0h2v2h-2V7zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function MultiImageUploader({ 
  images: initial, 
  onChange, 
  onCoverChange,
  enableLocalStorage = false, 
  storageKey = "smartstay-multi-images", 
  className,
  maxImages = 10
}: MultiImageUploaderProps) {
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

  const [isDragOver, setIsDragOver] = useState(false);

  useEffect(() => {
    if (enableLocalStorage) {
      localStorage.setItem(storageKey, JSON.stringify(images));
    }
    onChange?.(images);
    
    // Update cover image when images change
    if (onCoverChange) {
      onCoverChange(images.length > 0 ? images[0].url : "");
    }
  }, [images, enableLocalStorage, storageKey, onChange, onCoverChange]);

  const handleFiles = useCallback((fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    
    const filesToProcess = Array.from(fileList).slice(0, maxImages - images.length);
    const next: UploadImage[] = [];
    
    filesToProcess.forEach((file) => {
      if (!file.type.startsWith("image/")) return;
      const url = URL.createObjectURL(file);
      next.push({ id: uuidv4(), file, url, name: file.name });
    });
    
    setImages((prev) => [...prev, ...next]);
  }, [images.length, maxImages]);

  const onDropArea: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.length ? e.dataTransfer.files : null;
    if (file) handleFiles(file);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    setIsDragOver(false);
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = images.findIndex((img) => img.id === active.id);
    const newIndex = images.findIndex((img) => img.id === over.id);
    setImages((items) => arrayMove(items, oldIndex, newIndex));
  };

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((i) => i.id !== id));
  };

  const setCoverImage = (id: string) => {
    const imageIndex = images.findIndex((img) => img.id === id);
    if (imageIndex > 0) {
      setImages((items) => arrayMove(items, imageIndex, 0));
    }
  };

  const hasImages = images.length > 0;

  return (
    <div className={className}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium text-zinc-300">Images</h3>
        <span className="text-xs text-zinc-500">{images.length}/{maxImages}</span>
      </div>

      {/* Drop / Select Area */}
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDropArea}
        className={`mb-4 flex h-32 cursor-pointer items-center justify-center rounded-xl border border-dashed text-sm transition-all ${
          isDragOver ? "border-violet-400 bg-violet-400/10 text-violet-300" : "border-white/20 bg-white/5 text-zinc-400 hover:bg-white/10"
        } ${images.length >= maxImages ? "cursor-not-allowed opacity-50" : ""}`}
        onClick={() => images.length < maxImages && document.getElementById("multi-file-input")?.click()}
      >
        {images.length < maxImages ? (
          <div className="text-center">
            <svg className="mx-auto mb-2 h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <p className="font-medium">Drop images here or click to upload</p>
            <p className="mt-1 text-xs text-zinc-500">JPG, PNG, WebP up to 10MB each</p>
          </div>
        ) : (
          <p className="text-zinc-500">Maximum images reached ({maxImages})</p>
        )}
        <input 
          id="multi-file-input" 
          type="file" 
          multiple 
          accept="image/*" 
          className="hidden" 
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {hasImages && (
        <p className="mb-3 text-xs text-zinc-400">
          First image is used as cover. Drag to reorder or click the star button.
        </p>
      )}

      {/* Gallery */}
      {!hasImages ? (
        <div className="rounded-xl border border-white/10 bg-black/30 p-6 text-center text-sm text-zinc-400">
          No images added yet
        </div>
      ) : (
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={images.map((i) => i.id)} strategy={rectSortingStrategy}>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {images.map((img, idx) => (
                <div key={img.id} className="animate-fade-in-up">
                  <SortableThumb 
                    image={img} 
                    index={idx} 
                    onRemove={removeImage}
                    onSetCover={setCoverImage}
                    isCover={idx === 0}
                  />
                </div>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
}