import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, AllProducts } from "./pages";
import Header from "./components/main_layouts/Header";
import Footer from "./components/main_layouts/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
