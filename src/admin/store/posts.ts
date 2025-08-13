"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type BlogPost = {
  id: string;
  imageUrl?: string;
  title: string;
  subtitle?: string;
  tag?: string;
  description?: string;
  createdAt: number;
  updatedAt: number;
};

type PostsState = {
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, "createdAt" | "updatedAt">) => void;
  updatePost: (id: string, updates: Partial<BlogPost>) => void;
  deletePost: (id: string) => void;
  reorderPosts: (orderedIds: string[]) => void;
  saveOrder: () => void;
};

export const usePostsStore = create<PostsState>()(
  persist(
    (set) => ({
      posts: [],
      addPost: (post) =>
        set((state) => ({
          posts: [
            {
              ...post,
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            ...state.posts,
          ],
        })),
      updatePost: (id, updates) =>
        set((state) => ({
          posts: state.posts.map((p) =>
            p.id === id ? { ...p, ...updates, updatedAt: Date.now() } : p
          ),
        })),
      deletePost: (id) => set((state) => ({ posts: state.posts.filter((p) => p.id !== id) })),
      reorderPosts: (orderedIds) =>
        set((state) => ({
          posts: orderedIds
            .map((id) => state.posts.find((p) => p.id === id))
            .filter((p): p is BlogPost => Boolean(p)),
        })),
      saveOrder: () => {},
    }),
    { name: "smartstay-admin-posts" }
  )
);


