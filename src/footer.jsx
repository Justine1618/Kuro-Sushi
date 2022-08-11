'use strict';

import React from "react";

const Footer = (props) => {
    return (
        <div className="footer-container">
            <div onClick={() => props.onClick(4)}>Allergy Info</div>
            <div onClick={() => props.onClick(5)}>Calorie Informatin</div>
            <div onClick={() => props.onClick(6)}>Careers</div>
            <div onClick={() => props.onClick(7)}>About Us</div>
            <div onClick={() => props.onClick(8)}>Party Catering</div>
        </div>
    );
}

export default Footer;