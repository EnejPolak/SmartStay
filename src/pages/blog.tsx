import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { GetServerSideProps } from "next";
import type { BlogListItem } from "@/types/blog";
import { fetchBlogList } from "@/lib/blogs";

type Props = { posts: BlogListItem[] };

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const posts = await fetchBlogList();
  return { props: { posts } };
};

const BlogPage: React.FC<Props> = ({ posts }) => {
  const categories = React.useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => {
      if (p.category?.name) set.add(p.category.name);
    });
    return ["All", ...Array.from(set)];
  }, [posts]);

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category?.name === selectedCategory);

  const formatDate = (iso?: string | null) =>
    iso
      ? new Date(iso).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

  // If you don’t have a `featured` flag, treat newest (first) as featured
  const featured =
    selectedCategory === "All" && filteredPosts.length > 0
      ? filteredPosts[0]
      : undefined;

  return (
    <>
      <Head>
        <title>SmartStay Blog - Hospitality Insights & Tips</title>
        <meta
          name="description"
          content="Stay updated with the latest trends, tips, and insights in hospitality and property management from the SmartStay team."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div
              className="mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-violet-600/20 to-blue-600/20 text-violet-300 border border-violet-500/30">
                Latest Insights
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                SmartStay
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              Discover the latest trends, insights, and best practices in
              hospitality technology. Stay ahead with expert advice from
              industry leaders.
            </p>
          </div>
        </section>

        {/* Category filter */}
        <section
          className="px-4 mb-12 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 opacity-0 animate-fade-in-up hover:transform hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/25"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                  style={{
                    animationDelay: `${1.0 + index * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured */}
        {selectedCategory === "All" && featured && (
          <section className="px-4 mb-16">
            <div className="max-w-6xl mx-auto">
              <h2
                className="text-2xl font-bold text-white mb-8 text-center opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: "1.6s",
                  animationFillMode: "forwards",
                }}
              >
                Featured Article
              </h2>

              <article
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900/50 to-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 opacity-0 animate-fade-in-up hover:transform hover:scale-[1.02]"
                style={{
                  animationDelay: "1.8s",
                  animationFillMode: "forwards",
                }}
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      {featured.category?.name && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-violet-600/20 text-violet-300 border border-violet-500/30">
                          {featured.category.name}
                        </span>
                      )}
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500">
                      {featured.title}
                    </h3>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {featured.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                          {(featured.author || "S")[0]}
                        </div>
                        <div>
                          <p className="text-gray-200 font-medium text-sm">
                            {featured.author || "SmartxStay"}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {formatDate(featured.published_at)}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${featured.slug}`}
                        className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 transition-all duration-300 group"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className="relative h-64 lg:h-full rounded-2xl overflow-hidden">
                    <Image
                      src={
                        featured.cover_photo ||
                        "/pictures/logo/smartStay_logo.png"
                      }
                      alt={featured.title}
                      fill
                      className="object-contain bg-gradient-to-br from-slate-900 to-gray-800 p-8"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-2xl font-bold text-white mb-8 text-center opacity-0 animate-fade-in-up"
              style={{
                animationDelay: selectedCategory === "All" ? "2.0s" : "1.6s",
                animationFillMode: "forwards",
              }}
            >
              {selectedCategory === "All"
                ? "Latest Articles"
                : `${selectedCategory} Articles`}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts
                .slice(selectedCategory === "All" ? 1 : 0)
                .map((post, index) => (
                  <article
                    key={post.id}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/50 to-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2 hover:scale-105 opacity-0 animate-fade-in-up"
                    style={{
                      animationDelay: `${
                        selectedCategory === "All"
                          ? 2.2 + index * 0.1
                          : 1.8 + index * 0.1
                      }s`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={
                          post.cover_photo ||
                          "/pictures/logo/smartStay_logo.png"
                        }
                        alt={post.title}
                        fill
                        className="object-contain bg-gradient-to-br from-slate-900 to-gray-800 p-6 group-hover:scale-105 transition-transform duration-500"
                      />
                      {post.category?.name && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-violet-600/20 text-violet-300 border border-violet-500/30 backdrop-blur-sm">
                            {post.category.name}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <span>{formatDate(post.published_at)}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                            {(post.author || "S")[0]}
                          </div>
                          <span className="text-gray-300 text-sm font-medium">
                            {post.author || "SmartxStay"}
                          </span>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-violet-400 hover:text-violet-300 font-medium text-sm group/link"
                        >
                          Read More
                          <svg
                            className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-violet-600/20 to-blue-600/20 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-violet-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  No articles found
                </h3>
                <p className="text-gray-400">
                  Try selecting a different category or check back later for new
                  content.
                </p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
