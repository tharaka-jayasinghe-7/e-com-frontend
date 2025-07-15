import React from "react";
import Header from "../components/layouts/Header";
import HeroSection from "../components/layouts/HeroSection";
import CategoriesSection from "../components/layouts/CategorySection";
import FeaturedProducts from "../components/layouts/FeaturedProducts";
import PromoBanners from "../components/layouts/PromoBanners";
import NewProducts from "../components/layouts/NewProducts";
import Footer from "../components/layouts/Footer";

function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <PromoBanners />
      <NewProducts />
      <Footer />
    </main>
  );
}

export default Home;
