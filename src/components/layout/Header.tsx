import React, { useState, ChangeEvent, FormEvent } from "react";
import { Heart, Menu, X, User } from "lucide-react";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import InputField from "../common/InputField";
import logo from "../../assets/images/logo.png";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { totalItems } = useCart();
    const { items: wishlistItems } = useWishlist();
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Search Term:", searchTerm);
        // Add your search logic here
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems: { label: string; path: string }[] = [
        { label: "wah!", path: "/" },
        { label: "My Stuff", path: "/my-stuff" },
        { label: "Wallet", path: "/wallet" },
        { label: "Communities", path: "/communities" },
        { label: "Chat", path: "/chat" },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 py-6 border-b border-gray-200">
            <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8 py-4 sm:py-0 lg:py-0">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="flex-shrink-0 flex-x items-center ">
                        <img src={logo} alt="" />
                        <p className="text-orange-500 font-bold text-sm ml-[50px] mt-[-10px]">
                            Smart Deals
                        </p>
                    </div>
                </div>

                <div className="flex items-center space-x-10">
                    {/* Navigation - Desktop */}
                    <nav className="hidden md:flex ml-[370px]">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.path}
                                className="text-gray-700 hover:text-orange-500 hover:underline hover:underline-offset-1 px-3 py-2 text-sm font-medium transition-colors duration-200"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Search and Actions */}
                    <div className="flex items-center space-x-4">
                        <form onSubmit={handleSearchSubmit}>
                            <InputField
                                id="search"
                                name="search"
                                placeholder="What are you looking for?"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </form>
                        <button
                            type="button"
                            className="text-gray-600 hover:text-gray-900 relative"
                            aria-label="Wishlist"
                        >
                            <Heart size={20} />
                            {wishlistItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    {wishlistItems.length}
                                </span>
                            )}
                        </button>
                        <button
                            type="button"
                            className="text-gray-600 hover:text-gray-900 hidden md:block"
                            aria-label="Account"
                        >
                            <User size={20} className="bg-orange-400 rounded-full p-1" />
                        </button>

                        {/* Mobile menu button */}
                        <button
                            type="button"
                            className="md:hidden bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                            aria-expanded="false"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.path}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
