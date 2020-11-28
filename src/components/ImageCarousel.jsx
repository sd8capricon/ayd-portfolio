import React from 'react';
import { Carousel } from 'react-bootstrap';

// images
import image1 from "../images/carousel/1.jpg";
import image2 from "../images/carousel/2.jpg";
import image3 from "../images/carousel/3.jpg";
import image4 from "../images/carousel/4.jpg";
import image5 from "../images/carousel/5.jpg";
import image6 from "../images/carousel/6.jpg";

export default function ImageCarousel(){
    return(
        <div className="carousel">
            <Carousel indicators={false} pause={false}>
                <Carousel.Item interval={7000}>
                    <img
                        className="carousel-img"
                        src={image1}
                        alt="First Slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                    <img
                        className="carousel-img"
                        src={image2}
                        alt="Second Slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                    <img
                        className="carousel-img"
                        src={image3}
                        alt="Third Slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                    <img
                        className="carousel-img"
                        src={image4}
                        alt="Fourth Slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                    <img
                        className="carousel-img"
                        src={image5}
                        alt="Fifth Slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                    <img
                        className="carousel-img"
                        src={image6}
                        alt="Sixth Slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}