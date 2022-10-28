import React, {useEffect, useState} from 'react';
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import {Carousel} from 'react-bootstrap';


export default function ImageCarousel() {

    //*[_type=='home']|order(sr_no){_id,name,image}

    const client = sanityClient({
        projectId: process.env.REACT_APP_PROJECT_ID,
        dataset: 'production',
        apiVersion: '2021-10-21',
        useCdn: true
    })
    const builder = imageUrlBuilder(client)
    const urlBuilder = (source) => {
        return builder.image(source)
    }

    const [imgs, setImgs] = useState([])

    useEffect(() => {
        let query = "*[_type=='home']|order(sr_no){_id,name,image}"
        let imgArr = []
        client.fetch(query).then(res => {
            res.forEach(ele => {
                imgArr.push(urlBuilder(ele.image.asset).url())
            })
            setImgs(imgArr)
        })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const buildSlide = (img, key)=>{
        return (
            <Carousel.Item interval={5000} key={key}>
                <img
                    src={img}
                    alt={"carousel slide "+key}
                    className="carousel-img"
                />
            </Carousel.Item>
        )
    }

    return (
        <div className="carousel">
            <Carousel indicators={false} pause={false}>
                {imgs.map(buildSlide)}
                {/*<Carousel.Item interval={7000}>
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
                    </Carousel.Item>*/}
            </Carousel>
        </div>
    );
}