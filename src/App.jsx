import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import React from "react";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Home/Intro";
import Services from "./components/Home/Services";
import WhyChooseUs from "./components/Home/WhyChooseUs";
import OurProjects from "./components/Home/OurProjects";
import Testimonials from "./components/Home/Testimonials";

function App() {
  return (
    <Router>
      <Header />
      <div className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<div>
            <Intro />
            <Services />
            <WhyChooseUs />
            <OurProjects />
            <Testimonials />
          </div>} />
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
