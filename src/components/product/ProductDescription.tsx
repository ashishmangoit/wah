interface ProductDescriptionProps {
    description: string;
    terms: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
    description,
    terms,
}) => {
    return (
        <div className="space-y-4 ">
            {/* Description Section */}
            <div className="border-b-2 py-2">
                <h3 className="text-lg font-semibold text-black-900 ">
                    Deal Description
                </h3>

                <div className="py-4 pt-0 text-black prose max-w-none text-xs">
                    <p className="whitespace-pre-line">{description}</p>
                </div>
                
            </div>

            {/* Terms Section */}
            <div className="border-b-4 py-2">
                <h3 className="text-lg font-semibold text-black-900">
                    Deal Terms & Conditions
                </h3>
                <div className="py-4 pt-0 text-black prose max-w-none text-xs">
                    <p className="whitespace-pre-line">{terms}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
