'use client';

import React, { useEffect, useRef, useState } from 'react';

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Hotel Manager",
    hotel: "Grand Hotel Vienna",
    rating: 5,
    review: "SmartStay completely transformed how we manage our hotel operations. The automation saved us countless hours and dramatically improved guest satisfaction. I recommend it to every hotelier!",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Owner",
    hotel: "Alpine Apartments",
    rating: 5,
    review: "Fantastic solution for managing reservations! The interface is intuitive, integration with other platforms is seamless. Our guests love the personalized experience.",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Director",
    hotel: "Boutique Hotel Barcelona",
    rating: 5,
    review: "With SmartStay we increased occupancy by 35% while reducing operational costs. The analytics help us make the right business decisions. Excellent ROI!",
    avatar: "ER"
  }
];

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
            What our
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"> partners say</span>
          </h2>
          <p 
            className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            Join SmartStay today and become part of existing hotels and providers who already trust our platform to optimize their operations.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
              }`}
              style={{ transitionDelay: `${1200 + index * 200}ms` }}
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-violet-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Rating */}
                <div className="mb-6">
                  <StarRating rating={review.rating} />
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                  "{review.review}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm group-hover:scale-110 transition-all duration-300">
                      {review.avatar}
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div>
                    <h4 className="text-white font-semibold text-lg">{review.name}</h4>
                    <p className="text-violet-300 text-sm font-medium">{review.role}</p>
                    <p className="text-gray-400 text-sm">{review.hotel}</p>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/0 via-violet-500/0 to-blue-500/0 group-hover:from-violet-500/20 group-hover:via-transparent group-hover:to-blue-500/20 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}