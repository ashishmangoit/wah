import React, { useState } from "react";
import Button from "../common/Button";

const generateCouponCode = (length: number = 10): string => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return result;
};

const CouponGenerator: React.FC = () => {
    const [coupon, setCoupon] = useState<string>("");
    const [copied, setCopied] = useState<boolean>(false);

    const handleGenerate = () => {
        const newCoupon = generateCouponCode(10);
        setCoupon(newCoupon);
        setCopied(false);
    };

    const handleCopy = () => {
        if (coupon) {
            navigator.clipboard.writeText(coupon);
            setCopied(true);
        }
    };

    return (
        <div className="flex gap-2 flex-1">
            <Button
                variant="primary"
                onClick={handleGenerate}
            >
                Generate Coupon
            </Button>

            {coupon && (
                <div className="mt-4">
                    <p className="text-lg font-mono bg-gray-100 px-3 py-2 inline-block rounded">
                        {coupon}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CouponGenerator;
