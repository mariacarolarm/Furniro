import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Contact from "./pages/contact/Contact";
import Shop from "./pages/shop/Shop";
import ProductDetail from "./pages/productDetail/ProductDetail";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
