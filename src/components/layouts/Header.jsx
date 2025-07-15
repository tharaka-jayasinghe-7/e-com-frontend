import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, User, Menu, X, ChevronDown } from "lucide-react";
import Cart from "../ui/Cart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const accountDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accountDropdownRef.current &&
        !accountDropdownRef.current.contains(event.target)
      ) {
        setIsAccountDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "Categories", href: "#" },
    { name: "Products", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-teal-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-4">
              <span>📞 +94 112 700 123</span>
              <span>✉️ support@vibex.com</span>
            </div>
            <span>Lets get an Internship!!</span>
            <div className="flex items-center space-x-4">
              <span>Free shipping on orders over $50</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-teal-600 hover:text-teal-700 transition-colors"
            >
              Vibe-X
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Account Dropdown */}
            <div className="hidden md:block relative" ref={accountDropdownRef}>
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600"
                onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
              >
                <User className="h-5 w-5" />
                <span>Account</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isAccountDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isAccountDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-500 hover:text-white transition-colors">
                      View Profile
                    </button>
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-500 hover:text-white transition-colors">
                      My Orders
                    </button>
                    <hr className="my-2 border-gray-200" />
                    <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-500 hover:text-white transition-colors">
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Cart />

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block border-t border-gray-200">
          <div className="flex space-x-8 py-4">
            {navigation.map((item) => (
              <span
                key={item.name}
                className="text-gray-700 hover:text-teal-600 cursor-pointer font-medium transition-colors"
              >
                {item.name}
              </span>
            ))}
          </div>
        </nav>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>{" "}
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            {navigation.map((item) => (
              <span
                key={item.name}
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
              >
                {item.name}
              </span>
            ))}
            <span className="block py-2 text-gray-700 hover:text-primary-600 font-medium">
              Account
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
