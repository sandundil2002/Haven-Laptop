import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './Components/Home/Navbar';
import Carousal from './Components/Home/Carousal';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Products from './Components/Products/Products';
import Feedbacks from './Components/Review/Feedbacks';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carousal />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/products" element={<Products />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;