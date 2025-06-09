import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

import DomainTeam from "./pages/DomainTeam";

import Index from './pages/Index';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Header />
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team/>} />
          {/* <Route path="/team" element={<div>Our Team</div>} /> */}
<<<<<<< HEAD

          <Route path="/team" element={<Index />} />
          {/* <Route path="/profile/:id" element={<Index />} /> */}
        
=======
          <Route path="/" element={<Index />} />
          <Route path="/profile/:id" element={<Index />} />
>>>>>>> 24046e4136776e7b142abd497cd7b8255aa55859
          <Route path="/contact" element={<Contact />} />
           <Route path="/team/:domain" element={<DomainTeam />} />
          {/* <Route path="/signin" element={<div>Sign In Page</div>} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
