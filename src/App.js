'use strict';

import React from "react";
import './index.css';
import Hero from "./hero-banner.jsx";
import Home from "./home.jsx";
import Menu from "./menu.jsx";
import Reservations from "./reservations.jsx";
import Contact from "./contact.jsx";

import Footer from "./footer.jsx";
import Allergy from "./allergy.jsx";
import Calorie from "./calorie.jsx";
import Careers from "./careers.jsx";
import About from "./about.jsx";
import Party from "./party.jsx";

class App extends React.Component  {

    constructor(props) {
        super(props);

        this.state = {
            activePage: <Home />,
        };

        this.pages = [<Home />, <Menu />, <Reservations />, <Contact />,
            <Allergy />, <Calorie />, <Careers />, <About />, <Party />];
    }

    handleClick(page) {
        this.setState({activePage : this.pages[page]});
    }

    render() { 
        return (
        <div>
            <Hero onClick={(page) => {this.handleClick(page)}}/>
            {this.state.activePage}
            <Footer onClick={(page) => {this.handleClick(page)}}/>

        </div>
    )}
}

export default App;