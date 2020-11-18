import React from 'react';
import BackgroundSlider from 'react-background-slider'

// images
import image1 from "../images/carousel/1.jpg";
import image2 from "../images/carousel/2.jpg";
import image3 from "../images/carousel/3.jpg";
import image4 from "../images/carousel/4.jpg";
import image5 from "../images/carousel/5.jpg";
import image6 from "../images/carousel/6.jpg";


export default function Slider(){
    return(
        <BackgroundSlider
            images={[image1, image2, image3, image4, image5, image6]}
            duration={2} transition={1} />
    );
}