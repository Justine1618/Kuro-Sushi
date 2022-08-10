'use strict';

import React from "react";

const Contact = () => {
    return (
        <div className="contact-container">
            <form>
                <label for="contact-name">Name: </label>
                <input type="text" id="contact-name" name="contact-name"></input>
                <label for="contact-email">Your Email Address: </label>
                <input type="email" id="contact-email" name="contact-email"></input>
                <label for="contact-message">Your Message: </label>
                <textarea id="contact-message" name="contact-message" rows="10" cols="30"></textarea>
            </form>
        </div>
    )
};

export default Contact;