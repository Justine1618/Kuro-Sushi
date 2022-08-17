'use strict';

import React from "react";
import CateringLarge from "./images/Full_size/Catering_Platter_Large.jpg";
import CateringSmall from "./images/Full_size/Catering_Platter.jpg";
import SamplerPlatter from "./images/Full_size/Large_Sampler_Platter.jpg";

const slides = [CateringLarge, CateringSmall, SamplerPlatter];
const delay = 2500;

const Slideshow = () => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => 
                setIndex((prevIndex) => 
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div 
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)`}}
            >
                {slides.map((image, id) => (
                    <img className="slide" src={image} key={id}/>
                ))}
            </div>
            <div className="slideshowDots">
                {slides.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;