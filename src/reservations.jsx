'use strict';

import React from "react";

class Reservations extends React.Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        alert('Thank you for your reservation! You will recieve a confirmation email shortly!');
    }

    render() {
        return (
            <div className="reservations-container">
                <form id="reservations-form" onSubmit={this.handleSubmit}>
                    <div className="col-25">
                        <label htmlFor="res-fname">First Name: </label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="res-fname" name="res-fname"></input>
                    </div>
                    <div className="col-25">
                        <label htmlFor="res-lname">Last Name: </label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="res-lname" name="res-lname"></input>
                    </div>
                    <div className="col-25">
                        <label htmlFor="res-size">Party Size (1-10): </label>
                    </div>
                    <div className="col-75">
                        <input type="number" id="res-size" name="res-size" min="1" max="10"></input>
                    </div>
                    <div className="col-25">
                        <label htmlFor="res-time">Time and Date: </label>
                    </div>
                    <div className="col-75">
                        <input type="datetime-local" id="res-time" name="res-time"></input>
                    </div>
                    <div className="submit-button">
                        <input type="submit" value="Submit"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Reservations;