import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, AllProducts } from "./pages";
import CartPage from "./pages/CartPage";
import Header from "./components/main_layouts/Header";
import Footer from "./components/main_layouts/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
