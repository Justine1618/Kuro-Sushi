'use strict';

import React from "react";

const Hero = (props) => {
    return (
        <div className="hero-container"> 
            <div className="hero-title">
                Kuro Sushi
            </div>
            <div className="hero-tab-container">
                <div className="hero-home hero-button" onClick={() => props.onClick(0)}>Home</div>
                <div className="hero-menu hero-button" onClick={() => props.onClick(1)}>Menu</div>
                <div className="hero-reservations hero-button" onClick={() => props.onClick(2)}>Reservations</div>
                <div className="hero-contact hero-button" onClick={() => props.onClick(3)}>Contact Us</div>
            </div>
        </div>
    );
}

export default Hero;