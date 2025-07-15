import ProductCard from "../ui/ProductCard";
import { newProducts } from "../../data/products";

const NewProducts = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              New Products
            </h2>
            <p className="text-gray-600">Check out our latest arrivals</p>
          </div>

          <button className="text-teal-800 hover:text-teal-700 font-medium">
            See All Products →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
