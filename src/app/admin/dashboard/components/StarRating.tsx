"use client";

import React, { useState } from 'react';
import { Star, X } from 'lucide-react';

interface StarRatingProps {
  value: number;
  onChange: (rating: number) => void;
  disabled?: boolean;
  showClear?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const StarRating: React.FC<StarRatingProps> = ({
  value,
  onChange,
  disabled = false,
  showClear = true,
  size = 'md'
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const handleStarClick = (rating: number) => {
    if (!disabled) {
      onChange(rating);
    }
  };

  const handleStarHover = (rating: number) => {
    if (!disabled) {
      setHoverValue(rating);
    }
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const handleKeyDown = (event: React.KeyboardEvent, rating: number) => {
    if (disabled) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleStarClick(rating);
    } else if (event.key === 'ArrowLeft' && rating > 1) {
      event.preventDefault();
      onChange(rating - 1);
    } else if (event.key === 'ArrowRight' && rating < 5) {
      event.preventDefault();
      onChange(rating + 1);
    }
  };

  const clearRating = () => {
    if (!disabled) {
      onChange(0);
    }
  };

  const displayValue = hoverValue !== null ? hoverValue : value;

  return (
    <div className="flex items-center gap-2">
      <div
        role="radiogroup"
        aria-label="Rating"
        className="flex items-center gap-1"
        onMouseLeave={handleMouseLeave}
      >
        {[1, 2, 3, 4, 5].map((rating) => {
          const isFilled = rating <= displayValue;
          const isHovered = hoverValue !== null && rating <= hoverValue;
          
          return (
            <button
              key={rating}
              type="button"
              role="radio"
              aria-checked={rating === value}
              aria-label={`${rating} star${rating > 1 ? 's' : ''}`}
              className={`
                ${sizeClasses[size]} 
                transition-all duration-150 ease-in-out
                ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:scale-110'}
                focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-800
                rounded-sm
              `}
              onClick={() => handleStarClick(rating)}
              onMouseEnter={() => handleStarHover(rating)}
              onKeyDown={(e) => handleKeyDown(e, rating)}
              disabled={disabled}
              tabIndex={disabled ? -1 : 0}
            >
              <Star
                className={`
                  w-full h-full transition-colors duration-150
                  ${isFilled 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'fill-transparent text-gray-300 hover:text-yellow-300'
                  }
                  ${isHovered ? 'fill-yellow-300 text-yellow-300' : ''}
                `}
              />
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-zinc-300 font-medium">
          {value}/5
        </span>
        
        {showClear && value > 0 && !disabled && (
          <button
            type="button"
            onClick={clearRating}
            className="
              text-zinc-400 hover:text-zinc-300 transition-colors duration-150
              focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-800
              rounded-sm p-1
            "
            aria-label="Clear rating"
            title="Clear rating"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default StarRating;
