'use strict';

import React from "react";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        alert('Thank you for your comment, we will respond within 2 business days.');
    }

    render() {
        return (
            <div className="contact-container">
                <form id="contact-form" onSubmit={this.handleSubmit}> 
                    <div className="col-25">
                        <label htmlFor="contact-fname">First Name: </label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="contact-fname" name="contact-fname"></input>
                    </div>
                    <div className="col-25">
                        <label htmlFor="contact-lname">Last Name:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="contact-lname" name="contact-lname"></input>
                    </div>
                    <div className="col-25">
                        <label htmlFor="contact-email">Email Address: </label>
                    </div>
                    <div className="col-75">
                        <input type="email" id="contact-email" name="contact-email"></input>
                    </div>
                    <div className="col-25">
                        <label htmlFor="contact-message">Your Message: </label>
                    </div>
                    <div className="col-75">
                        <textarea id="contact-message" name="contact-message" rows="10" cols="30"></textarea>
                    </div>
                    <div className="submit-button">
                        <input type="submit" value="Submit"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact;