// pages/blog/[slug].tsx
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchBlogBySlug } from "@/lib/blogs";
import type { BlogDetail } from "@/types/blog";
import type { GetServerSideProps } from "next";

type Props = { post: BlogDetail | null };

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const slug = String(ctx.params?.slug || "");
  const post = await fetchBlogBySlug(slug);
  if (!post) {
    return { notFound: true };
  }
  return { props: { post } };
};

const BlogDetailPage: React.FC<Props> = ({ post }) => {
  if (!post) return null;

  const formatDate = (iso?: string | null) =>
    iso
      ? new Date(iso).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

  return (
    <>
      <Head>
        <title>{post.title} – SmartStay Blog</title>
        <meta name="description" content={post.excerpt || ""} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950">
        <Navbar />

        <section className="pt-28 pb-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-4 flex items-center gap-3">
              {post.category?.name && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-violet-600/20 text-violet-300 border border-violet-500/30">
                  {post.category.name}
                </span>
              )}
              <span className="text-gray-400 text-sm">
                {formatDate(post.published_at)}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              {post.title}
            </h1>

            {post.cover_photo && (
              <div className="relative w-full h-64 md:h-80 mb-8 rounded-2xl overflow-hidden">
                <Image
                  src={post.cover_photo}
                  alt={post.title}
                  fill
                  className="object-contain bg-gradient-to-br from-slate-900 to-gray-800 p-6"
                />
              </div>
            )}

            <article className="prose prose-invert max-w-none">
              {post.content_html ? (
                <div dangerouslySetInnerHTML={{ __html: post.content_html }} />
              ) : (
                <p className="text-gray-300">
                  (No content yet — add content in the admin editor)
                </p>
              )}
            </article>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogDetailPage;
