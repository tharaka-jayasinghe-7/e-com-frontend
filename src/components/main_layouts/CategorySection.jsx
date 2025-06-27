import { categories } from "../../data/products";

const CategoriesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Items by Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of products across different categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer bg-gray-50 hover:bg-primary-50 rounded-lg p-6 text-center transition-colors duration-300"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600">{category.count} items</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
