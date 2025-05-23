import React, { useState } from "react";
import {
    Heart,
    Share2,
    ShoppingBag,
    Instagram,
    Facebook,
    Globe,
    TimerReset,
    MessagesSquare,
    PhoneCall,
} from "lucide-react";
import Rating from "../common/Rating";
import Button from "../common/Button";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import CouponGenerator from "./CouponGenerator.tsx";
import ProductDescription from "./ProductDescription.tsx";
import ReviewsSection from "./ReviewsSection.tsx";

const productDescription = `PlayStation 5 Controller Skin High quality vinyl with air channels adhesive for easy bubbles free installs & mess free removeal Pressure sensitive`;

const productTerms = `PlayStation 5 Controller Skin High quality vinyl with air channels adhesive for easy bubbles free installs & mess free removeal Pressure sensitive`;

const productInfo = {
    rating: 4.8,
    reviews: 150,
};
const ratingCounts = {
    5: 350,
    4: 50,
    3: 20,
    2: 8,
    1: 4,
};

interface ProductInfoProps {
    product: {
        id: string;
        name: string;
        originalPrice: number;
        discountedPrice: number;
        discount: number;
        rating: number;
        reviews: number;
        stockStatus: "in-stock" | "low-stock" | "out-of-stock";
        image: string;
        sku: string;
        colors?: string[];
        sizes?: string[];
    };
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(
        product.colors?.[0] || ""
    );
    const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");

    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    const isWishlisted = isInWishlist(product.id);

    const handleIncreaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecreaseQuantity = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const handleAddToCart = () => {
        addToCart(
            {
                id: product.id,
                name: product.name,
                price: product.discountedPrice,
                image: product.image,
            },
            quantity
        );
    };

    const handleToggleWishlist = () => {
        if (isWishlisted) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist({
                id: product.id,
                name: product.name,
                price: product.discountedPrice,
                image: product.image,
            });
        }
    };

    return (
        <div className="space-y-6">
            {/* Product Title & SKU */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">
                    {product.name}
                </h2>
                <Button
                    onClick={handleToggleWishlist}
                    variant="outline"
                    className={
                        isWishlisted
                            ? "text-orange-500 border-none"
                            : "border-none"
                    }
                    icon={
                        <Heart
                            size={18}
                            className={isWishlisted ? "fill-orange-500" : ""}
                        />
                    }
                    aria-label={
                        isWishlisted
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                    }
                />
            </div>
            {/* Price & Rating */}
            <div className="sm:flex-row sm:items-center gap-4">
                <div className="flex items-center">
                    <Rating value={product.rating} size="md" />
                    <span className="ml-2 text-sm text-gray-500">
                        ({product.reviews} Reviews) | 25 Coupans Left
                    </span>
                </div>
                <div className="flex items-center gap-x-2 my-2">
                    <Instagram size={20} />
                    <Facebook size={20} />
                    <Globe size={20} />
                </div>
                <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-yellow-600">
                        ${product.discountedPrice.toFixed(2)}
                    </span>
                    {product.discount > 0 && (
                        <span className="ml-2 text-lg text-gray-500 line-through">
                            ${product.originalPrice.toFixed(2)}
                        </span>
                    )}
                </div>
            </div>
            {/* Support Icons */}
            <div className="flex justify-center items-center gap-8 w-full py-8">
                <div className="flex flex-col items-center gap-2">
                    <TimerReset size={20} />
                    <p className="text-xs">07-Feb-2025</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <MessagesSquare size={20} />
                    <p className="text-xs">Chat</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <PhoneCall size={20} />
                    <p className="text-xs">Phone</p>
                </div>
            </div>

            {/* Checkpoints sections */}
            <div className="border rounded-md box-shadow-sm">
                <div>
                    <h3 className="text-base font-semibold text-gray-900 border-b border-gray-200 p-3 py-4">
                        Please select atleast one Base Item
                    </h3>
                    {/* <div className="mt-2 space-y-2"> */}
                    <label className="flex items-center justify-between border-b border-gray-200 p-3 py-4 rounded-md p-3 cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="base-item"
                                className="form-radio text-orange-400 focus:ring-orange-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">
                                Get flat 50% off on new and latest
                                collection
                            </span>
                        </div>
                        <span className="text-sm font-medium text-orange-400">
                            $100
                        </span>
                    </label>
                    <label className="flex items-center justify-between border-b border-gray-200 p-3 py-4 rounded-md p-3 cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="base-item"
                                className="form-radio text-orange-500 focus:ring-orange-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">
                                Get flat 30% off on new and latest
                                collection
                            </span>
                        </div>
                        <span className="text-sm font-medium text-orange-400">
                            $70
                        </span>
                    </label>
                    {/* </div> */}
                </div>
                <div>
                    <h3 className="text-base font-semibold text-gray-900 border-b border-gray-200 p-3 py-4">
                        Our Add on services
                    </h3>
                    {/* <div className="mt-2 space-y-2"> */}
                    <label className="flex items-center justify-between border-b border-gray-200 p-3 py-4 rounded-md p-3 cursor-pointer hover:bg-gray-50 ">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox text-orange-500 rounded focus:ring-orange-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">
                                Dress Stitching at affordable price
                            </span>
                        </div>
                        <span className="text-sm font-medium text-orange-400">
                            $300
                        </span>
                    </label>
                    <label className="flex items-center justify-between border-b border-gray-200 p-3 py-4 rounded-md p-3 cursor-pointer hover:bg-gray-50 ">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox text-orange-500 rounded focus:ring-orange-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">
                                Get your shirt stitched to perfection
                            </span>
                        </div>
                        <span className="text-sm font-medium text-orange-400">
                            $150
                        </span>
                    </label>
                    {/* </div> */}
                </div>
            </div>

            {/* CoupanGenerator Button */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex gap-2 flex-1">
                    <CouponGenerator />
                </div>
            </div>

            {/* Product Description and terms */}
            <ProductDescription
                description={productDescription}
                terms={productTerms}
            />
            {/* Customer Reviews */}
            {/* Reviews */}
            <div className="mb-10">
                <ReviewsSection
                    averageRating={productInfo.rating}
                    totalReviews={productInfo.reviews}
                    ratingCounts={ratingCounts}
                />
            </div>
        </div>
    );
};

export default ProductInfo;
