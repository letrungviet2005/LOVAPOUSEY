import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar.js";
import Footer from "../src/components/Footer/Footer.js";
import Products from "../src/pages/Products/Products.js";
import Contact from "../src/pages/Contact/Contact.js";
import Home from "../src/pages/Home/Home.js";
import CardDeatail from "../src/pages/Products/List/CardDeatail/CardDeatail.js";
import ScrollToTop from "../src/components/ScrollToTop/ScrollToTop.js";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail" element={<CardDeatail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
