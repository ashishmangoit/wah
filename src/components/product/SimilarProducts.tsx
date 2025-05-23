import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Rating from "../common/Rating";
import DiscountBadge from "../common/DiscountBadge";
import Button from "../common/Button";

interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    reviews: number;
}

interface SimilarProductsProps {
    products: Product[];
    title?: string;
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({
    products,
    title = "Similar Deals",
}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const scroll = (direction: "left" | "right") => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollAmount = 300; // Adjust as needed
        const newScrollLeft =
            direction === "left"
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

        container.scrollTo({
            left: newScrollLeft,
            behavior: "smooth",
        });
    };

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        // Show left arrow if we've scrolled right
        setShowLeftArrow(container.scrollLeft > 0);

        // Show right arrow if we can scroll more to the right
        setShowRightArrow(
            container.scrollLeft <
                container.scrollWidth - container.clientWidth - 10
        );
    };

    return (
        <div className="relative">
            <h2 className="text-xl text-[#e99b0e] font-semibold mb-4 flex">
                <div className="w-[20px] mr-[10px] bg-[#e99b0e] "></div>
                {title}
            </h2>

            {/* Navigation Arrows */}
            {showLeftArrow && (
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-8 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                    aria-label="Scroll left"
                >
                    <ChevronLeft size={20} />
                </button>
            )}

            {showRightArrow && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-8 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                    aria-label="Scroll right"
                >
                    <ChevronRight size={20} />
                </button>
            )}

            {/* Products Carousel */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 py-2 space-x-4"
                onScroll={handleScroll}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex-shrink-0 w-48 sm:w-56 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
                        <a href={`/product/${product.id}`} className="block">
                            <div className="relative">
                                <div className="aspect-square bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                {product.discount && product.discount > 0 && (
                                    <div className="absolute top-2 left-2">
                                        <DiscountBadge
                                            discount={product.discount}
                                            size="sm"
                                        />
                                    </div>
                                )}
                                <Button
                                    variant="outline"
                                    className=" border-none absolute top-2 right-1"
                                    icon={<Heart size={18} />}
                                />
                            </div>

                            <div className="p-3">
                                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 h-10">
                                    {product.name}
                                </h3>

                                <div className="mt-2 flex items-baseline">
                                    <span className="text-sm font-semibold text-yellow-500">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    {product.originalPrice &&
                                        product.originalPrice >
                                            product.price && (
                                            <span className="ml-2 text-xs text-gray-500 line-through">
                                                $
                                                {product.originalPrice.toFixed(
                                                    2
                                                )}
                                            </span>
                                        )}
                                </div>
                                <div className="mt-1 flex items-center">
                                    <Rating value={product.rating} size="sm" />
                                    <span className="ml-1 text-xs text-gray-500">
                                        ({product.reviews})
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimilarProducts;
