import React from "react";
import Header from "../components/main_layouts/Header";
import HeroSection from "../components/main_layouts/HeroSection";
import CategoriesSection from "../components/main_layouts/CategorySection";
import FeaturedProducts from "../components/main_layouts/FeaturedProducts";
import PromoBanners from "../components/main_layouts/PromoBanners";
import NewProducts from "../components/main_layouts/NewProducts";
import Footer from "../components/main_layouts/Footer";

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
