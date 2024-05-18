import React, { useEffect } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import BG from "./components/BG";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
 import Contact from "./routes/Contact";
import {Route , Routes } from "react-router-dom";
import Navbar from "./components/Navbar";








function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
    <Navbar />
    <div style={{ height: "100vh" }} data-aos="fade-up">
        <BG />
      </div>
      
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    
    </>
  );
}

export default App;
