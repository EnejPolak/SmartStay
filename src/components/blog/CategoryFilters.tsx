'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Category } from '@/lib/getCategories';

interface CategoryFiltersProps {
  categories: Category[];
  activeCategory?: string;
}

const categoryTranslations: Record<string, Record<string, string>> = {
  sl: {
    hotels: 'Hoteli',
    novosti: 'Novosti',
    gostitelji: 'Gostitelji',
    partnerji: 'Partnerji',
    all: 'Vsi',
  },
  en: {
    hotels: 'Hotels',
    novosti: 'News',
    gostitelji: 'Hosts',
    partnerji: 'Partners',
    all: 'All',
  },
  hr: {
    hotels: 'Hoteli',
    novosti: 'Novosti',
    gostitelji: 'Domaćini',
    partnerji: 'Partneri',
    all: 'Svi',
  },
};

export default function CategoryFilters({ categories, activeCategory }: CategoryFiltersProps) {
  const { language } = useLanguage();

  const getTranslatedName = (category: Category): string => {
    const translations = categoryTranslations[language];
    if (translations && translations[category.slug]) {
      return translations[category.slug];
    }
    return category.name;
  };

  // Filter out "uncategorized" category (case-insensitive)
  const filteredCategories = categories.filter(
    (category) => category.slug.toLowerCase() !== 'uncategorized' && category.name.toLowerCase() !== 'uncategorized'
  );

  const allLabel = categoryTranslations[language]?.all || 'All';
  const isAllActive = !activeCategory;

  return (
    <div className="category-filters-container">
      <div className="category-filters-wrapper">
        {/* All button */}
        <Link
          href="/blog"
          className={`category-filter-btn ${isAllActive ? 'active' : ''}`}
        >
          {allLabel}
        </Link>

        {/* Category buttons */}
        {filteredCategories.map((category) => {
          const translatedName = getTranslatedName(category);
          const isActive = activeCategory === category.slug;
          
          return (
            <Link
              key={category.id}
              href={`/blog/category/${category.slug}`}
              className={`category-filter-btn ${isActive ? 'active' : ''}`}
            >
              {translatedName}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

