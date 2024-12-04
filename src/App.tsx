import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Contact from "./pages/contact/Contact";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
