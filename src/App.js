'use strict';

import React from "react";
import './index.css';
import Hero from "./hero-banner.jsx";
import Home from "./home.jsx";
import Menu from "./menu.jsx";
import Reservations from "./reservations.jsx";
import Contact from "./contact.jsx";

import Footer from "./footer.jsx";
import Allergy from "./allergy.jsx";
import Calorie from "./calorie.jsx";
import Careers from "./careers.jsx";
import About from "./about.jsx";
import Party from "./party.jsx";

const App = () => {
    return (
        <div>
            <Hero />
            <Home />
            <Menu />
            <Reservations />
            <Contact />
            <Footer />
            <Allergy />
            <Calorie />
            <Careers />
            <About />
            <Party />
        </div>
    )
};

export default App;