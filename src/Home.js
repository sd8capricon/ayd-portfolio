import React from "react";
import MyNav from "./components/Nav";
import Slider from "./components/BackSlide";
import ImageCarousel from "./components/ImageCarousel"
import "./App.css";


function Home() {
    return (
      <div>        
          <MyNav color="transparent"/>
          <ImageCarousel/>
        {/* <Slider/> */}
      </div>
    );
  }
  
  export default Home;
  
  