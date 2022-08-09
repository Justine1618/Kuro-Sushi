'use strict';

import React from "react";
import Hero from "./hero-banner.jsx";
import Footer from "./footer.jsx";

export default function Home() {
    return (
        <div className="homepage">
            <Hero />
            <h1 className="tagline">LA's Best Sushi!</h1>
            <div className="carosel">Placeholder for carosel</div>
            <div className="testimonial">
                <p>"This is the best sushi that I have ever had!" -Bob Bobbington</p>
                <p>"I really love the garlic ponzu salmon!" -Justine</p>
                <p>"Wow, look at all that sushi go!" -Sarah Savanah</p>
            </div>
            <Footer />
        </div>
    )
}