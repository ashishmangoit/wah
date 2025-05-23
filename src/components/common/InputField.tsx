import React, { ChangeEvent } from "react";
import { Search } from "lucide-react";

interface InputFieldProps {
    id: string;
    value: string;
    label?: string;
    name: string;
    placeholder?: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    id,
    value,
    label,
    name,
    placeholder = "",
    type = "text",
    onChange,
    error,
}) => {
    return (
        <div className="relative bg-gray-100 w-full border px-3 sm:text-sm ">
            {label && (
                <label htmlFor={id} className="block  text-sm font-medium text-black-200 mb-1">
                    {label}
                </label>
            )}
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={`bg-gray-100 w-full placeholder-gray-500 focus:outline-none  px-4 sm:text-sm py-2 ${
                    error ? "border-red-500" : ""
                }`}
                
            />
            <span className="absolute right-4 top-2 "><Search/></span>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
};

export default InputField;
