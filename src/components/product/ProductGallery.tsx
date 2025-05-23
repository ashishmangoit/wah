import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImage {
  id: string;
  src: string;
  alt: string;
}

interface ProductGalleryProps {
  images: ProductImage[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setSelectedImage(index);
  };

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {/* Thumbnails - Vertical on desktop, horizontal on mobile */}
      <div className="order-2 md:order-1 md:col-span-1 flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => handleThumbnailClick(index)}
            className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border-2 rounded overflow-hidden transition-all ${
              selectedImage === index
                ? 'border-orange-500'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <img
              src={image.src}
              alt={`${image.alt} thumbnail`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="order-1 md:order-2 md:col-span-4 relative">
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative group">
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Navigation arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Discount badge */}
          <div className="absolute top-2 left-2 bg-[#e99b0e] text-black text-sm font-semibold px-2 py-1 rounded-md">
            -40%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;