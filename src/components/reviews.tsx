'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguageStore } from '../stores/language';

interface Review {
  id: string;
  name: string;
  surname: string;
  profile_picture?: string;
  company: string;
  rating: number;
  description: string;
  status: 'visible' | 'hidden';
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'} transition-all duration-300`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set());
  const { getTranslation } = useLanguageStore();
  const t = getTranslation();

  // Fetch reviews from API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/reviews/public');
        
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }

        const data = await response.json();
        setReviews(data.reviews);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load reviews');
        console.error('Error fetching reviews:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Helper function to get initials for avatar
  const getInitials = (name: string, surname: string) => {
    return `${name.charAt(0)}${surname.charAt(0)}`.toUpperCase();
  };

  // Helper functions for text expansion
  const toggleExpanded = (reviewId: string) => {
    setExpandedReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  const isExpanded = (reviewId: string) => expandedReviews.has(reviewId);



  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className={`absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-violet-600/6 to-blue-600/6 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          style={{ transitionDelay: '200ms' }}
        ></div>
        <div 
          className={`absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-600/4 to-purple-600/4 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          style={{ transitionDelay: '400ms' }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-flex items-center justify-center px-4 py-2 mb-6 text-sm font-medium text-violet-300 bg-violet-900/20 border border-violet-800/30 rounded-full backdrop-blur-sm transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <span className="mr-2">⭐</span>
            Customer Reviews
          </div>
          <h2 
            className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            {t.reviews.title}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"> {t.reviews.titleHighlight}</span>
          </h2>
          <p 
            className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-400"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-16">
            <p className="text-red-400 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
            >
              {t.reviews.retryButton}
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && reviews.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">{t.reviews.noReviews}</p>
          </div>
        )}

        {/* Reviews Grid */}
        {!loading && !error && reviews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
          >
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
                }`}
                style={{ transitionDelay: `${1200 + index * 200}ms` }}
              >
                {/* Card */}
                <div className="relative flex flex-col p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-violet-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-15 group-hover:opacity-30 transition-all duration-300">
                    <svg className="w-6 h-6 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  {/* Rating */}
                  <div className="mb-4">
                    <StarRating rating={review.rating} />
                  </div>

                  {/* Review Text */}
                  <div className="mb-1">
                    <div 
                      className="transition-all duration-300 ease-in-out"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: isExpanded(review.id) ? 'unset' : 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: isExpanded(review.id) ? 'visible' : 'hidden'
                      }}
                    >
                      <p className="text-gray-300 leading-relaxed italic">
                        &ldquo;{review.description}&rdquo;
                      </p>
                    </div>
                    
                    {/* More/Less Button */}
                    {review.description.length > 200 && (
                      <button
                        onClick={() => toggleExpanded(review.id)}
                        className="mt-1 text-sm text-violet-400 hover:text-violet-300 transition-colors duration-200 font-medium flex items-center gap-1 group/btn"
                      >
                        <span>{isExpanded(review.id) ? 'Show Less' : 'Show More'}</span>
                        <svg 
                          className={`w-3 h-3 transition-transform duration-200 group-hover/btn:scale-110 ${
                            isExpanded(review.id) ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Reviewer Info */}
                  <div className="flex items-center space-x-4 pt-3 border-t border-slate-700/50 mt-4">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      {review.profile_picture ? (
                        <img
                          src={review.profile_picture}
                          alt={`${review.name} ${review.surname}`}
                          className="w-14 h-14 rounded-full object-cover border-2 border-violet-500/20 group-hover:scale-110 group-hover:border-violet-500/40 transition-all duration-300 shadow-lg"
                        />
                      ) : (
                        <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-violet-500/20 group-hover:scale-110 group-hover:border-violet-500/40 transition-all duration-300 shadow-lg">
                          {getInitials(review.name, review.surname)}
                        </div>
                      )}
                    </div>
                    
                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <h4 className="text-white font-semibold text-base truncate">{review.name} {review.surname}</h4>
                      <p className="text-gray-400 text-sm truncate">{review.company}</p>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/0 via-violet-500/0 to-blue-500/0 group-hover:from-violet-500/10 group-hover:via-transparent group-hover:to-blue-500/10 transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}