import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import WebFont from 'webfontloader';
import Header from "./layout/header/Header.js";
import Footer from "./layout/footer/Footer.js";
import LoginSignUp from "./layout/user/LoginSignUp.js";
import About from "./layout/about/About.js";
import Contact from "./layout/contact/Contact.js";

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Tiro Tamil","Dancing Script", 'Edu NSW ACT Foundation', "Joan", 'Mochiy Pop One', 'Uchen', "Poppins"]
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        {/* <Route exact path="/" element={<LoginSignUp />} /> */}
        <Route exact path="/loginSignup" element={<LoginSignUp />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
