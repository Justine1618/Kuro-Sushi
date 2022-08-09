'use strict';

import React from "react";

export default function Hero() {
    return (
    <div className="hero-container"> 
        <div className="hero-title">
            Kuro Sushi
        </div>
        <div className="hero-tab-container">
            <div className="hero-home hero-button">Home</div>
            <div className="hero-menu hero-button">Menu</div>
            <div className="hero-reservations hero-button">Reservations</div>
            <div className="hero-contact hero-button">Contact Us</div>
        </div>
    </div>
    );

}