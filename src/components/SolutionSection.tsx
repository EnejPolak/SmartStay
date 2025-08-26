"use client";
import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguageStore } from '../stores/language';

const SolutionSection: React.FC = () => {
  const solutionsHeader = useIntersectionObserver({ threshold: 0.2 });
  // Card-level slide-in animations removed per request
  const statsSection = useIntersectionObserver({ threshold: 0.3 });
  const { getTranslation } = useLanguageStore();
  const t = getTranslation();

  const [propertiesCount, setPropertiesCount] = useState(0);
  const [setupTime, setSetupTime] = useState(0);
  const [questionsPercent, setQuestionsPercent] = useState(0);

  // Setup counters when stats enter view
  useEffect(() => {
    if (statsSection.isIntersecting) {
      const propertiesInterval = setInterval(() => {
        setPropertiesCount(prev => {
          if (prev >= 120) {
            clearInterval(propertiesInterval);
            return 120;
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
            {t.solution.title}
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-medium">
              {t.solution.titleHighlight}
            </span>
          </h3>
          <p className="text-lg text-gray-500 max-w-xl mx-auto font-light">
            {t.solution.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {t.solution.features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className={`w-1 h-16 bg-gradient-to-b ${index === 0 ? 'from-green-400' : index === 1 ? 'from-blue-400' : 'from-violet-400'} to-transparent mx-auto mb-8`}></div>
              <h4 className="text-2xl font-medium text-white mb-6 tracking-tight">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-lg leading-relaxed font-light min-h-[112px] flex items-center">
                {feature.description}
              </p>
              <div className="mt-8 pt-6 border-t border-gray-800">
                <span className={`font-medium ${index === 0 ? 'text-green-400' : index === 1 ? 'text-blue-400' : 'text-violet-400'}`}>
                  {feature.tagline}
                </span>
              </div>
            </div>
          ))}
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


