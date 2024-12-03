import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
