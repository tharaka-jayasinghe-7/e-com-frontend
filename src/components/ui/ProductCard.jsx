import { Star, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "../../CartContext";

const ProductCard = ({ product }) => {
  const [imageError, setImageError] = useState(false);

  // Get the addToCart function from our cart
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Call the addToCart function with the product
    addToCart(product);
    alert(`${product.name} added to cart!`); // feedback
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        {imageError ? (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-4xl">📦</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            onError={handleImageError}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}

        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
              New
            </span>
          )}
          {product.sale && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
              Sale
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-primary-600 cursor-pointer">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center space-x-1 mb-2">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        <div className="flex items-center space-x-2 mb-3">
          <span className="text-lg font-bold text-teal-600">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
