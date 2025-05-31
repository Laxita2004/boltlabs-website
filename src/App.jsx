import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import React from "react";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About Us</div>} />
          <Route path="/team" element={<div>Our Team</div>} />
          <Route path="/contact" element={<div>Contact Us</div>} />
          <Route path="/signin" element={<div>Sign In Page</div>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
