import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How Digital Guides Reduce Guest Questions by 95%",
      excerpt: "Clear, accessible information transforms the guest experience. With SmartStay, hosts provide everything from WiFi details to curated local recommendations in one clean, mobile-first guide.",
      author: "SmartStay Team",
      publishedAt: "2025-01-15",
      readTime: "5 min read",
      category: "Guest Experience",
      featured: true,
      image: "/pictures/logo/smartStay_logo.png"
    },
    {
      id: 2,
      title: "The Future of Hospitality: AI-Powered Guest Services",
      excerpt: "Discover how artificial intelligence is revolutionizing the hospitality industry, from personalized recommendations to predictive maintenance.",
      author: "Sarah Johnson",
      publishedAt: "2025-01-10",
      readTime: "7 min read",
      category: "Technology",
      featured: false,
      image: "/pictures/logo/smartStay_logo.png"
    },
    {
      id: 3,
      title: "Maximizing Revenue with Smart Pricing Strategies",
      excerpt: "Learn advanced pricing techniques that can increase your property revenue by up to 30% while maintaining high guest satisfaction.",
      author: "Michael Chen",
      publishedAt: "2025-01-05",
      readTime: "6 min read",
      category: "Revenue Management",
      featured: false,
      image: "/pictures/logo/smartStay_logo.png"
    },
    {
      id: 4,
      title: "Sustainable Tourism: Building Eco-Friendly Properties",
      excerpt: "Explore practical ways to make your property more sustainable while attracting environmentally conscious travelers.",
      author: "Emma Rodriguez",
      publishedAt: "2024-12-28",
      readTime: "8 min read",
      category: "Sustainability",
      featured: false,
      image: "/pictures/logo/smartStay_logo.png"
    }
  ];

  const categories = ["All", "Guest Experience", "Technology", "Revenue Management", "Sustainability"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Head>
        <title>SmartStay Blog - Hospitality Insights & Tips</title>
        <meta name="description" content="Stay updated with the latest trends, tips, and insights in hospitality and property management from the SmartStay team." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950">
        <Navbar />
        
        {/* Hero Section with staggered animations */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-violet-600/20 to-blue-600/20 text-violet-300 border border-violet-500/30">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                Latest Insights
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                SmartStay
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Discover the latest trends, insights, and best practices in hospitality technology. 
              Stay ahead with expert advice from industry leaders.
            </p>
          </div>
        </section>

        {/* Category Filter with animation */}
        <section className="px-4 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 opacity-0 animate-fade-in-up hover:transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/25'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                  style={{ 
                    animationDelay: `${1.0 + index * 0.1}s`, 
                    animationFillMode: 'forwards' 
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post with animation */}
        {selectedCategory === "All" && (
          <section className="px-4 mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>Featured Article</h2>
              {filteredPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900/50 to-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 opacity-0 animate-fade-in-up hover:transform hover:scale-[1.02]" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
                  <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-violet-600/20 text-violet-300 border border-violet-500/30">
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                            {post.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-gray-200 font-medium text-sm">{post.author}</p>
                            <p className="text-gray-400 text-xs">{formatDate(post.publishedAt)}</p>
                          </div>
                        </div>
                        
                        <Link 
                          href={`/Previewblog?id=${post.id}`}
                          className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 transition-all duration-300 group"
                        >
                          Read More
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="relative h-64 lg:h-full rounded-2xl overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-contain bg-gradient-to-br from-slate-900 to-gray-800 p-8"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Blog Posts Grid with staggered animations */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: selectedCategory === "All" ? '2.0s' : '1.6s', animationFillMode: 'forwards' }}>
              {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured || selectedCategory !== "All").map((post, index) => (
                <article key={post.id} className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/50 to-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2 hover:scale-105 opacity-0 animate-fade-in-up" style={{ animationDelay: `${selectedCategory === "All" ? 2.2 + index * 0.1 : 1.8 + index * 0.1}s`, animationFillMode: 'forwards' }}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-contain bg-gradient-to-br from-slate-900 to-gray-800 p-6 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-violet-600/20 text-violet-300 border border-violet-500/30 backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span className="opacity-50">•</span>
                      <span>{post.readTime}</span>
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
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-gray-300 text-sm font-medium">{post.author}</span>
                      </div>
                      
                      <Link 
                        href={`/Previewblog?id=${post.id}`}
                        className="inline-flex items-center text-violet-400 hover:text-violet-300 font-medium text-sm group/link"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
                  <svg className="w-12 h-12 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try selecting a different category or check back later for new content.</p>
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


