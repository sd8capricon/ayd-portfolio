import React from 'react';
import video from "../videos/video.mp4";
import Carousel from 'react-bootstrap/Carousel';
import "../App.css";
import MyNav from './Nav'

export default function CCarousel(){
    return(
        <div>
            <div>
            <Carousel className="Video" controls={false}>
                    <Carousel.Item>
                        <video autoPlay muted loop width="100%" height="100%">
                            <source src={video} type="video/mp4"/>
                        </video>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <video autoPlay muted loop width="100%" height="100%">
                            <source src={video} type="video/mp4"/>
                        </video>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <video autoPlay muted loop width="100%" height="100%">
                            <source src={video} type="video/mp4"/>
                        </video>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
}