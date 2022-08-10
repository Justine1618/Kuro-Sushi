'use strict';

import React from "react";
import './index.css';
import Home from "./home.jsx";
import Menu from "./menu.jsx";
import Hero from "./hero-banner.jsx";
import Footer from "./footer.jsx";


export default function App() {
    return (
        <div>
            <Hero />
            <Home />
            <Menu />
            <Footer />
        </div>
    )
};