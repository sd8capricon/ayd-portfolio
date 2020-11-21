import React from "react";
import MyNav from "./components/Nav";
import ImageCarousel from "./components/ImageCarousel"
import "./App.css";


function Home() {
    return (
      <div>        
          <MyNav color="transparent"/>
          <div data-aos="zoom-in-up" data-aos-duration="700">
            <ImageCarousel/>
          </div>
      </div>
    );
  }
  
  export default Home;
  
  