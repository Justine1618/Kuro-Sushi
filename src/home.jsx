'use strict';

import React from "react";
import Slideshow from "./slideshow.jsx";

const Home = () => {
    return (
        <div className="homepage">
            <h1 className="tagline">LA's Best Sushi!</h1>
            <Slideshow />
            <br />
            <div className="hours">
                <p>Hours: Everyday 11am - 8pm</p>
            </div>
            <br />
            <div className="testimonial">
                <div><em>"This is the best sushi that I have ever had!" </em>-Robert Dalton</div>
                <div><em>"I really love the garlic ponzu salmon!"</em> -Justine Walters</div>
                <div><em>"Wow, look at all that sushi go!" </em>-Sarah Calbert</div>
            </div>
        </div>
    )
}

export default Home;