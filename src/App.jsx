import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DomainTeam from "./pages/DomainTeam";
import ProfilePage from './components/ProfilePage'


function App() {
  return (
    <>
      <Header />
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/team/:domain" element={<DomainTeam />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/signin" element={<div>Sign In Page</div>} /> */}

        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
