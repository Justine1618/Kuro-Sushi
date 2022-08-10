'use strict';

import React from "react";
import platter from "./platter.jpg";

const Menu = () => {
    return (
        <div className="menu-container">
            <div className="card">
                <img src={platter} alt="Variety Sushi Platter" width="100" />
                <p>Variety Platter</p>
                <p>$19.99</p>
            </div>
        </div>
    );
}

export default Menu;