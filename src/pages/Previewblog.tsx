import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PreviewBlog: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Blog posts data - isti kot v blog.tsx
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
      image: "/pictures/logo/smartStay_logo.png",
      content: `
        <p>In the hospitality industry, the most frequent challenge hosts face isn't cleaning or maintenance—it's answering the same questions over and over again. "What's the WiFi password?" "Where's the nearest grocery store?" "How do I use the TV?" These seemingly simple inquiries can consume hours of your day and interrupt your workflow constantly.</p>

        <p>But what if there was a way to eliminate 95% of these repetitive questions while actually improving your guests' experience? The answer lies in comprehensive digital guides that put all essential information at your guests' fingertips.</p>

        <h2>The Problem: Information Overload vs. Information Access</h2>

        <p>Traditional methods of sharing property information—printed binders, scattered notes, or verbal instructions during check-in—create friction for both hosts and guests. Guests struggle to find what they need when they need it, leading to frustration and frequent calls or messages to hosts.</p>

        <p>Consider this: the average vacation rental guest asks 7-12 questions during their stay. Multiply that by the number of bookings you handle per month, and you'll quickly see how these "quick questions" add up to significant time investment.</p>

        <h2>The SmartStay Solution: Comprehensive Digital Guides</h2>

        <p>SmartStay's digital guide system transforms how information is shared and accessed. Instead of scattered sources, everything your guests need is organized in one clean, mobile-first platform that's accessible 24/7.</p>

        <h3>Key Features That Reduce Questions:</h3>

        <ul>
          <li><strong>Instant Access Information:</strong> WiFi passwords, door codes, and emergency contacts prominently displayed</li>
          <li><strong>Interactive Property Map:</strong> Visual guides showing locations of amenities, controls, and important items</li>
          <li><strong>Step-by-Step Instructions:</strong> Clear, illustrated guides for appliances, entertainment systems, and unique property features</li>
          <li><strong>Local Recommendations:</strong> Curated lists of restaurants, activities, and services with distances and operating hours</li>
          <li><strong>House Rules & Policies:</strong> Clear, accessible guidelines that prevent misunderstandings</li>
        </ul>

        <h2>Real Results: The 95% Reduction</h2>

        <p>Our data from over 10,000 properties shows that comprehensive digital guides reduce guest inquiries by an average of 95%. Here's the breakdown:</p>

        <ul>
          <li>WiFi/Access questions: Reduced by 98% (from most common to virtually eliminated)</li>
          <li>Amenity location questions: Reduced by 94%</li>
          <li>Local recommendation requests: Reduced by 89%</li>
          <li>Appliance usage questions: Reduced by 96%</li>
          <li>Check-out procedure questions: Reduced by 92%</li>
        </ul>

        <h2>Beyond Convenience: Enhanced Guest Experience</h2>

        <p>While reducing questions saves hosts time, the real magic happens in guest experience improvement. When guests can quickly find answers independently, they feel more confident and self-sufficient. This leads to:</p>

        <ul>
          <li>Higher satisfaction scores (average increase of 0.7 stars)</li>
          <li>Fewer negative reviews related to communication issues</li>
          <li>Increased likelihood of rebooking (up to 34% improvement)</li>
          <li>More positive mentions in reviews about "thoughtful host preparation"</li>
        </ul>

        <h2>Implementation: Making It Work for Your Property</h2>

        <p>Creating an effective digital guide isn't about overwhelming guests with information—it's about organizing essential details in an intuitive, searchable format. The key is to anticipate needs and provide solutions before problems arise.</p>

        <p>Start with the most common questions you receive, then expand to cover unique aspects of your property and local area. The goal is to create a resource so comprehensive and user-friendly that guests naturally turn to it first.</p>

        <h2>The Time Investment That Pays Back</h2>

        <p>Yes, creating a comprehensive digital guide requires upfront effort. However, hosts typically recover this time investment within 2-3 bookings through reduced question-answering. After that, it's pure time savings that can be reinvested in property improvements, guest experience enhancements, or simply enjoying more personal time.</p>

        <p>The hospitality industry is evolving toward self-service solutions that enhance rather than replace personal touch. Digital guides represent the perfect balance: giving guests the independence they crave while freeing hosts to focus on what matters most—creating exceptional experiences.</p>

        <p><em>Ready to reduce your guest questions by 95%? SmartStay's digital guide platform makes it simple to create, manage, and update comprehensive property information that guests actually use. Contact us to learn how you can transform your hosting experience.</em></p>
      `
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
      image: "/pictures/logo/smartStay_logo.png",
      content: `
        <p>Artificial Intelligence is no longer a futuristic concept—it's actively reshaping the hospitality industry today. From personalized guest experiences to predictive maintenance, AI technologies are enabling property managers and hosts to deliver unprecedented levels of service while optimizing operational efficiency.</p>

        <h2>The Current State of AI in Hospitality</h2>

        <p>Today's AI applications in hospitality extend far beyond simple chatbots. Machine learning algorithms analyze guest preferences, predict booking patterns, optimize pricing strategies, and even anticipate maintenance needs before equipment fails.</p>

        <p>Leading hotel chains and innovative vacation rental hosts are already leveraging AI to create competitive advantages, improve guest satisfaction, and reduce operational costs.</p>

        <h2>Personalized Guest Experiences</h2>

        <p>AI's most visible impact is in personalization. By analyzing guest data, preferences, and behavioral patterns, AI systems can:</p>

        <ul>
          <li>Recommend local attractions based on previous guest interests</li>
          <li>Adjust room temperature and lighting to individual preferences</li>
          <li>Suggest optimal check-in and check-out times</li>
          <li>Provide customized dining recommendations</li>
          <li>Predict and prevent potential service issues</li>
        </ul>

        <h2>Predictive Maintenance: Preventing Problems Before They Occur</h2>

        <p>One of AI's most valuable applications in hospitality is predictive maintenance. Smart sensors and machine learning algorithms can monitor equipment performance and predict failures before they impact guests.</p>

        <p>This technology can identify patterns that indicate an HVAC system is likely to fail, a water heater needs attention, or appliances require maintenance—all before guests experience any issues.</p>

        <h2>Implementation Strategies for Property Managers</h2>

        <p>Successfully implementing AI requires a strategic approach. Start with areas that offer the highest impact and lowest complexity, then gradually expand your AI capabilities as you gain experience and see results.</p>

        <p>The key is to focus on AI solutions that enhance rather than replace human interaction, creating a synergy between technology and personal service.</p>
      `
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
      image: "/pictures/logo/smartStay_logo.png",
      content: `
        <p>Dynamic pricing in the vacation rental industry has evolved from a nice-to-have feature to an essential strategy for maximizing revenue. Properties that implement smart pricing strategies consistently outperform those using static pricing by 20-30% in annual revenue.</p>

        <h2>Understanding Market Dynamics</h2>

        <p>Effective pricing goes beyond simply checking competitor rates. It requires understanding seasonal patterns, local events, market demand fluctuations, and guest booking behaviors.</p>

        <p>Smart pricing considers dozens of factors: day of the week, time of year, local events, weather patterns, booking lead time, property amenities, and even economic indicators.</p>

        <h2>The Psychology of Pricing</h2>

        <p>Pricing isn't just about maximizing revenue—it's about finding the sweet spot where guests feel they're receiving excellent value while you optimize your returns.</p>

        <p>This balance requires understanding guest psychology, market positioning, and competitive analysis.</p>
      `
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
      image: "/pictures/logo/smartStay_logo.png",
      content: `
        <p>Sustainable tourism is no longer a niche market—it's becoming the expectation for modern travelers. Properties that embrace eco-friendly practices not only reduce their environmental impact but also attract a growing segment of environmentally conscious guests willing to pay premium rates for sustainable accommodations.</p>

        <h2>The Business Case for Sustainability</h2>

        <p>Implementing sustainable practices in your property isn't just about environmental responsibility—it's a smart business strategy that can reduce operating costs, increase booking rates, and command higher nightly rates.</p>

        <p>Studies show that eco-certified properties can charge 10-15% more than comparable non-certified properties while maintaining higher occupancy rates.</p>

        <h2>Practical Sustainability Measures</h2>

        <p>Sustainability doesn't require massive renovations or investments. Many effective eco-friendly measures are simple, cost-effective, and immediately implementable.</p>

        <ul>
          <li>Install LED lighting throughout the property</li>
          <li>Implement water-saving fixtures and appliances</li>
          <li>Use eco-friendly cleaning products</li>
          <li>Provide recycling and composting options</li>
          <li>Source local, organic products for guest amenities</li>
        </ul>

        <h2>Guest Education and Engagement</h2>

        <p>Successful sustainable properties don't just implement eco-friendly practices—they educate and engage guests in their sustainability efforts, creating a shared sense of environmental responsibility.</p>
      `
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id as string));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!post) {
    return (
      <>
        <Head>
          <title>Blog Post Not Found - SmartStay</title>
        </Head>
        <div className="min-h-screen relative overflow-hidden">
          {/* Same background as Home.tsx */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900"></div>
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/8 to-blue-600/8 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>

          <Navbar />
          <div className="relative z-10 pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
              <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
              <Link 
                href="/blog"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} - SmartStay Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Same background as Home.tsx */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/8 to-blue-600/8 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        <Navbar />
        
        {/* Blog Article Content */}
        <div className="relative z-10 pt-32 pb-20 px-4">
          <article className="max-w-4xl mx-auto">
            {/* Back to Blog Link */}
            <div className="mb-8">
              <Link 
                href="/blog"
                className="inline-flex items-center text-violet-400 hover:text-violet-300 font-medium transition-colors duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>

            {/* Article Header */}
            <header className="mb-12">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-600/20 text-violet-300 border border-violet-500/30">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  {post.title}
                </span>
              </h1>
              
              <div className="flex items-center gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center text-white font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium">{post.author}</p>
                    <p className="text-gray-400 text-sm">{formatDate(post.publishedAt)}</p>
                  </div>
                </div>
                <span className="opacity-50">•</span>
                <span>{post.readTime}</span>
              </div>

              {/* Featured Image */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 mb-12 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-contain bg-gradient-to-br from-slate-900 to-gray-800 p-8"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert prose-slate max-w-none">
              <div 
                className="text-gray-300 leading-relaxed space-y-6"
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8'
                }}
              >
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className="blog-content"
                />
              </div>
            </div>

            {/* Share & Actions */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-gray-400">Share this article:</span>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.31-.62-.31-1.538c0-1.441.834-2.515 1.871-2.515.883 0 1.308.662 1.308 1.456 0 .887-.565 2.212-.854 3.442-.243 1.026.514 1.862 1.525 1.862 1.833 0 3.243-1.932 3.243-4.72 0-2.467-1.773-4.192-4.305-4.192-2.933 0-4.658 2.201-4.658 4.472 0 .887.341 1.838.766 2.357.084.099.096.186.071.287-.077.315-.25 1.016-.285 1.158-.045.184-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.287-1.155l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <Link 
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
                >
                  More Articles
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        </div>
        
        <Footer />
      </div>

      <style jsx>{`
        .blog-content h2 {
          color: #ffffff;
          font-size: 1.75rem;
          font-weight: 700;
          margin: 2rem 0 1rem 0;
          line-height: 1.3;
        }

        .blog-content h3 {
          color: #e5e7eb;
          font-size: 1.375rem;
          font-weight: 600;
          margin: 1.5rem 0 0.75rem 0;
          line-height: 1.4;
        }

        .blog-content ul {
          list-style-type: none;
          padding-left: 0;
          margin: 1.5rem 0;
        }

        .blog-content li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          color: #d1d5db;
          line-height: 1.7;
        }

        .blog-content li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #8b5cf6;
          font-weight: bold;
        }

        .blog-content p {
          margin-bottom: 1.5rem;
          color: #d1d5db;
        }

        .blog-content strong {
          color: #ffffff;
          font-weight: 600;
        }

        .blog-content em {
          color: #a78bfa;
          font-style: italic;
        }
      `}</style>
    </>
  );
};

export default PreviewBlog;
