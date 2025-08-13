"use client";
import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const SolutionSection: React.FC = () => {
  const solutionsHeader = useIntersectionObserver({ threshold: 0.2 });
  // Card-level slide-in animations removed per request
  const statsSection = useIntersectionObserver({ threshold: 0.3 });

  const [propertiesCount, setPropertiesCount] = useState(0);
  const [setupTime, setSetupTime] = useState(0);
  const [questionsPercent, setQuestionsPercent] = useState(0);

  // Setup counters when stats enter view
  useEffect(() => {
    if (statsSection.isIntersecting) {
      const propertiesInterval = setInterval(() => {
        setPropertiesCount(prev => {
          if (prev >= 200) {
            clearInterval(propertiesInterval);
            return 200;
          }
          return prev + 5;
        });
      }, 20);

      const setupInterval = setInterval(() => {
        setSetupTime(prev => {
          if (prev >= 24) {
            clearInterval(setupInterval);
            return 24;
          }
          return prev + 1;
        });
      }, 50);

      const questionsInterval = setInterval(() => {
        setQuestionsPercent(prev => {
          if (prev >= 95) {
            clearInterval(questionsInterval);
            return 95;
          }
          return prev + 2;
        });
      }, 25);

      return () => {
        clearInterval(propertiesInterval);
        clearInterval(setupInterval);
        clearInterval(questionsInterval);
      };
    }
  }, [statsSection.isIntersecting]);

  // Cover transition is handled globally in `madToSolutionTransition.ts`.

  return (
    <section id="solution" className="py-32 px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
            SmartStay solves this
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-medium">
              automatically
            </span>
          </h3>
          <p className="text-lg text-gray-500 max-w-xl mx-auto font-light">
            One digital guide eliminates 95% of guest questions while you sleep
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="text-center group">
            <div className="w-1 h-16 bg-gradient-to-b from-green-400 to-transparent mx-auto mb-8"></div>
            <h4 className="text-2xl font-medium text-white mb-6 tracking-tight">
              Instant answers, 24/7
            </h4>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Guests find WiFi passwords, house rules, and local recommendations instantly. 
              No more 2AM interruptions to your family time.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <span className="text-green-400 font-medium">Get your life back</span>
            </div>
          </div>

          <div className="text-center group">
            <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-transparent mx-auto mb-8"></div>
            <h4 className="text-2xl font-medium text-white mb-6 tracking-tight">
              Focus on what matters
            </h4>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Stop answering the same questions repeatedly. Spend time growing your business 
              or enjoying life while guests help themselves.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <span className="text-blue-400 font-medium">Work smarter, not harder</span>
            </div>
          </div>

          <div className="text-center group">
            <div className="w-1 h-16 bg-gradient-to-b from-violet-400 to-transparent mx-auto mb-8"></div>
            <h4 className="text-2xl font-medium text-white mb-6 tracking-tight">
              Set it and forget it
            </h4>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Once set up, SmartStay runs automatically. No maintenance, no updates, 
              no technical headaches. Pure passive income.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <span className="text-violet-400 font-medium">True automation</span>
            </div>
          </div>
        </div>

        <div ref={statsSection.targetRef} className="border-t border-gray-700 pt-16">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-light text-white mb-3">
                {propertiesCount}+
              </div>
              <div className="text-gray-500 font-light">Properties served</div>
            </div>
            <div>
              <div className="text-4xl font-light text-white mb-3">
                {setupTime}h
              </div>
              <div className="text-gray-500 font-light">Setup time</div>
            </div>
            <div>
              <div className="text-4xl font-light text-white mb-3">
                {questionsPercent}%
              </div>
              <div className="text-gray-500 font-light">Questions eliminated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;


