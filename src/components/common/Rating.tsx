import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  maxValue?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  count?: number;
}

const Rating: React.FC<RatingProps> = ({ 
  value, 
  maxValue = 5, 
  size = 'md',
  showCount = false,
  count
}) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(value);
    const hasHalfStar = value % 1 >= 0.5;

    for (let i = 1; i <= maxValue; i++) {
      if (i <= fullStars) {
        stars.push(
          <Star
            key={i}
            className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`}
          />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className={`${sizeClasses[size]} text-gray-300`} />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`} />
            </div>
          </div>
        );
      } else {
        stars.push(
          <Star
            key={i}
            className={`${sizeClasses[size]} text-gray-300`}
          />
        );
      }
    }

    return stars;
  };

  return (
    <div className="flex items-center">
      <div className="flex">{renderStars()}</div>
      {showCount && count !== undefined && (
        <span className="ml-2 text-sm text-gray-500">({count})</span>
      )}
    </div>
  );
};

export default Rating;