'use strict';

import React from "react";
import Slideshow from "./slideshow.jsx";

const Home = () => {
    return (
        <div className="homepage">
            <h1 className="tagline">LA's Best Sushi!</h1>
            <Slideshow />
            <br />
            <div className="testimonial">
                <p>"This is the best sushi that I have ever had!" -Bob Bobbington</p>
                <p>"I really love the garlic ponzu salmon!" -Justine</p>
                <p>"Wow, look at all that sushi go!" -Sarah Savanah</p>
            </div>
        </div>
    )
}

export default Home;