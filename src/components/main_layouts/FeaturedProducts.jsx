import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../ui/ProductCard";
import { featuredProducts } from "../../data/products";

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const maxIndex = Math.max(0, featuredProducts.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleProducts = featuredProducts.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Featured Products
            </h2>
            <p className="text-gray-600">Check out our most popular items</p>
          </div>

          <div className="hidden md:flex space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
