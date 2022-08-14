'use strict';

import React from "react";

import AvocadoShrimp from "./images/Avocado_Shrimp_Roll.jpg";
import CateringPlatterLarge from "./images/Catering_Platter_Large.jpg";
import CateringPlatterSmall from "./images/Catering_Platter.jpg";
import CrunchyShrimp from "./images/Crunchy_shrimp_roll.jpg";
import GarlicPonzuSalmon from "./images/Garlic_Ponzu_Salmon.jpg";
import SamplingPlatterLarge from "./images/Large_Sampler_Platter.jpg";
import PhiladelphiaRoll from "./images/Philadelphia_Roll.jpg";
import RainbowRoll from "./images/Rainbow_roll.jpg";
import SalmonSteak from "./images/Salmon_steak.jpg";
import SalmonSushi from "./images/Salmon.jpg";
import SashimiBowl from "./images/Sashimi_Roll.jpg";
import SamplingPlatterSmall from "./images/Small_Sampler_Platter.jpg";
import SpicyTuna from "./images/Spicy_tuna.jpg";
import TobikoRoll from "./images/Tobiko_Roll.jpg";
import TunaSushi from "./images/Tuna.jpg";
import WagyuBeef from "./images/Wagyu_Beef.jpg"; 

const Menu = () => {
    return (
        <div className="menu-container">
            <div className="card">
                <img src={AvocadoShrimp} alt="Avocado Shrimp Roll" width="100px" height="100px" />
                <p>Avocado Shrimp Roll</p>
                <p>$7.99</p>
            </div>
            <div className="card">
                <img src={CrunchyShrimp} alt="Crunchy Shrimp Roll" width="100px" height="100px" />
                <p>Crunchy Shrimp Roll</p>
                <p>$6.99</p>
            </div>
            <div className="card">
                <img src={GarlicPonzuSalmon} alt="Garlic Ponzu Salmon Sushi" width="100px" height="100px" />
                <p>Garlic Ponzu Salmon Sushi</p>
                <p>$4.50</p>
            </div>
            <div className="card">
                <img src={PhiladelphiaRoll} alt="Philadelphia Roll" width="100px" height="100px" />
                <p>Philadelphia Roll</p>
                <p>$5.99</p>
            </div>
            <div className="card">
                <img src={RainbowRoll} alt="Rainbow Roll" width="100px" height="100px" />
                <p>Rainbow Row</p>
                <p>$5.99</p>
            </div>
            <div className="card">
                <img src={SalmonSteak} alt="Salmon Steak Sushi" width="100px" height="100px" />
                <p>Salmon Steak Sushi</p>
                <p>$3.99</p>
            </div>
            <div className="card">
                <img src={SalmonSushi} alt="Salmon Sushi" width="100px" height="100px" />
                <p>Salmon Sushi</p>
                <p>$3.50</p>
            </div>
            <div className="card">
                <img src={SashimiBowl} alt="Sashimi Bowl" width="100px" height="100px" />
                <p>Sashimi Bowl</p>
                <p>$3.50</p>
            </div>
            <div className="card">
                <img src={SpicyTuna} alt="Spicy Tuna Roll" width="100px" height="100px" />
                <p>Spicy Tuna Roll</p>
                <p>$5.99</p>
            </div>
            <div className="card">
                <img src={TobikoRoll} alt="Tobiko Roll" width="100px" height="100px" />
                <p>Tobiko Roll</p>
                <p>$6.99</p>
            </div>
            <div className="card">
                <img src={TunaSushi} alt="Tuna Sushi" width="100px" height="100px" />
                <p>Tuna Sushi</p>
                <p>$3.50</p>
            </div>
            <div className="card">
                <img src={WagyuBeef} alt="Wagyu Beef Sushi" width="100px" height="100px" />
                <p>Wagyu Beef Sushi</p>
                <p>$3.99</p>
            </div>
            <div className="card">
                <img src={SamplingPlatterSmall} alt="Small Sampling Platter" width="100px" height="100px" />
                <p>Small Sampling Platter</p>
                <p>$19.99</p>
            </div>
            <div className="card">
                <img src={SamplingPlatterLarge} alt="Large Sampling Platter" width="100px" height="100px" />
                <p>Large Sampling Platter</p>
                <p>$34.99</p>
            </div>
            <div className="card">
                <img src={CateringPlatterSmall} alt="Small Catering Platter" width="100px" height="100px" />
                <p>Small Catering Platter</p>
                <p>$44.99</p>
            </div>
            <div className="card">
                <img src={CateringPlatterLarge} alt="Large Catering Platter" widht="100px" height="100px" />
                <p>Large Catering Platter</p>
                <p>$69.99</p>
            </div>
        </div>
    );
}

export default Menu;