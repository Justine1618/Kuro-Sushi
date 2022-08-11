'use strict';

import React from "react";

const Reservations = () => {
    return (
        <div className="reservations-container">
            <form id="reservations-form">
                <label htmlFor="res-name">Name: </label>
                <input type="text" id="res-name" name="res-name"></input>
                <label htmlFor="res-size">Party Size (between 1 and 10): </label>
                <input type="number" id="res-size" name="res-size" min="1" max="10"></input>
                <label htmlFor="res-time">Time and Date: </label>
                <input type="datetime-local" id="res-time" name="res-time"></input>
            </form>
        </div>
    )
};

export default Reservations;