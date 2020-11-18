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
            <Carousel>
                <Carousel.Item>
                    <img
                        className="carousel-img"
                        src={image1}
                        alt="First Slide"
                    />
                    <Carousel.Caption>
                        <h3>First Slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-img"
                        src={image2}
                        alt="Second Slide"
                    />
                    <Carousel.Caption>
                        <h3>Second Slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-img"
                        src={image3}
                        alt="Third Slide"
                    />
                    <Carousel.Caption>
                        <h3>Third Slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-img"
                        src={image4}
                        alt="Fourth Slide"
                    />
                    <Carousel.Caption>
                        <h3>Fourth Slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-img"
                        src={image5}
                        alt="First Slide"
                    />
                    <Carousel.Caption>
                        <h3>Fifth Slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-img"
                        src={image6}
                        alt="First Slide"
                    />
                    <Carousel.Caption>
                        <h3>Sixth Slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}