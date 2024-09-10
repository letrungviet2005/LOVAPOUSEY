import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar.js";
import Footer from "../src/components/Footer/Footer.js";
import Products from "../src/pages/Products/Products.js";
import Contact from "../src/pages/Contact/Contact.js";
import Home from "../src/pages/Home/Home.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
