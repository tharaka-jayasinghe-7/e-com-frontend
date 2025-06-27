const HeroSection = () => {
  return (
    <section className="bg-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your One-Stop
              <br />
              <span className="text-sky-800">Electronic Market</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
              From cutting-edge smartphones to home electronics, find everything
              you need at unbeatable prices.
            </p>
            <button className="bg-sky-800 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1627697820844-6cdfb912a939?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Electronic devices showcase"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-sky-200 rounded-full opacity-50"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-sky-300 rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12">
          <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🚚</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Free Delivery</h3>
              <p className="text-sm text-gray-600">
                Free shipping on all orders
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💳</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Secure Payment</h3>
              <p className="text-sm text-gray-600">100% secure payment</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔄</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Easy Returns</h3>
              <p className="text-sm text-gray-600">30-day return policy</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎧</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">24/7 Support</h3>
              <p className="text-sm text-gray-600">Dedicated support team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
