import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, AllProducts, MyOrdersPage } from "./pages";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/my-orders" element={<MyOrdersPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
