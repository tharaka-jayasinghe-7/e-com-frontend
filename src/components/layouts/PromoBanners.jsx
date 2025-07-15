const PromoBanners = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Free Shipping Banner */}
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-t from-teal-700 to-teal-400 text-white">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10 p-8 lg:p-12">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Free Shipping</h3>
                  <h4 className="text-lg font-semibold mb-2">Everywhere!</h4>
                  <p className="text-teal-100 mb-4">
                    Get free delivery on all orders above $50. Shop now and save
                    on shipping costs!
                  </p>
                  <button className="bg-white text-teal-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Shop Now
                  </button>
                </div>
                <div className="hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=150&fit=crop&crop=center"
                    alt="Free shipping"
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Black Friday Banner */}
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10 p-8 lg:p-12">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Black Friday</h3>
                  <h4 className="text-lg font-semibold mb-2">Clearance</h4>
                  <p className="text-gray-300 mb-4">
                    Up to 70% discount on all electronics. Limited time offer!
                  </p>
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Shop Now
                  </button>
                </div>
                <div className="hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=200&h=150&fit=crop&crop=center"
                    alt="Black Friday sale"
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
