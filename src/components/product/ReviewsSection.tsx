import React from "react";
import Rating from "../common/Rating";

interface ReviewsSectionProps {
    averageRating: number;
    totalReviews: number;
    ratingCounts: Record<number, number>;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({
    averageRating,
    totalReviews,
    ratingCounts,
}) => {
    // Function to calculate percentage width for rating bars
    const calculatePercentage = (count: number) => {
        if (totalReviews === 0) return 0;
        return (count / totalReviews) * 100;
    };

    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-[-111px]">
                {/* Average Rating Display */}
                <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                        {averageRating.toFixed(1)}
                        <span className="text-2xl">/5</span>
                    </div>

                    <p className="text-gray-600">{totalReviews} reviews</p>
                    {/* Write Review Button */}

                    <button className="text-yellow-600 font-medium px-6 py-2 rounded-md transition-colors underline underline-offset-1">
                        Write a Review
                    </button>
                </div>

                {/* Rating Breakdown */}
                <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-cente gap-x-[70px] items-center">
                            <div className="w-12 text-sm text-gray-600 flex items-center justify-end
                            ">
                                <span className="ml-1">
                                    <div className="">
                                        <Rating
                                            value={star}
                                            size="lg"
                                        />
                                    </div>
                                </span>
                            </div>
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-yellow-400 rounded-full"
                                    style={{
                                        width: `${calculatePercentage(
                                            ratingCounts[star] || 0
                                        )}%`,
                                    }}
                                ></div>
                            </div>
                            <div className="text-right text-sm text-gray-600 ">
                                {ratingCounts[star] || 0}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewsSection;
