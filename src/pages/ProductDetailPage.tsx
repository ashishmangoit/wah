import React from 'react';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import SimilarProducts from '../components/product/SimilarProducts';
import product1 from '../assets/images/product1.png';
import product2 from '../assets/images/product2.png';
import product3 from '../assets/images/product3.png';
import product4 from '../assets/images/product4.png';
import product5 from '../assets/images/product5.png';
import similarProduct1 from '../assets/images/similarproduct1.png';
import similarProduct2 from '../assets/images/similarproduct2.png';
import similarProduct3 from '../assets/images/similarproduct3.png';
import similarProduct4 from '../assets/images/similarproduct4.png';
import similarProduct5 from '../assets/images/similarproduct5.png';


// Mock data for the PS5 controller
const productImages = [
  {
    id: '1',
    src: product1,
    alt: 'PS5 Single - Front View',
  },
  {
    id: '2',
    src: product2,
    alt: 'PS5 DualSense Controller - Side View',
  },
  {
    id: '3',
    src: product3,
    alt: 'PS5 DualSense Controller - Angle View',
  },
  {
    id: '4',
    src: product4,
    alt: 'PS5 DualSense Controller - Top View',
  },
  {
    id: '5',
    src: product5,
    alt: 'PS5 DualSense Controller - Side View',
  },
];

const productInfo = {
  id: 'ps5-controller',
  name: '40% OFF on Havic HV G-92 Gamepad',
  originalPrice: 160,
  discountedPrice: 120,
  discount: 40,
  rating: 4.8,
  reviews: 150,
  image: productImages[0].src,
  sizes: ['Standard'],
};


const similarProducts = [
  {
    id: 'ps4-controller',
    name: 'HaVIT HV-G92 Gamepad',
    image: similarProduct1,
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    rating: 4.5,
    reviews: 2103,
  },
  {
    id: 'gaming-keyboard',
    name: 'Gaming Keyboard',
    image: similarProduct2,
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 4.3,
    reviews: 843,
  },
  {
    id: 'ips-lcd-gaming-monitor',
    name: 'IPS LCD Gaming Monitor',
    image: similarProduct3,
    price: 249.99,
    originalPrice: 329.99,
    discount: 24,
    rating: 4.7,
    reviews: 512,
  },
  {
    id: 't-comfort-chair',
    name: 't-Series Comfort Chair',
    image: similarProduct4,
    price: 169.99,
    originalPrice: 249.99,
    discount: 32,
    rating: 4.2,
    reviews: 318,
  },
  {
    id: 's-comfort-chair',
    name: 's-Series Comfort Chair',
    image: similarProduct5,
    price: 129.99,
    originalPrice: 179.99,
    discount: 28,
    rating: 4.0,
    reviews: 205,
  },
];

const ProductDetailPage: React.FC = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        {/* Left: Product Gallery */}
        <ProductGallery images={productImages} />

        {/* Right: Product Info */}
        <ProductInfo product={productInfo} />
      </div>



      {/* Similar Products */}
      <div className="mb-10">
        <SimilarProducts products={similarProducts} />
      </div>
    </div>
  );
};

export default ProductDetailPage;