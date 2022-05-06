import React from "react";
import NavBar from "./components/NavBar/Nav";
import ImageCarousel from "./components/ImageCarousel"
import "./App.css";


function Home() {
  return (
    <div>
      {/* <NavBar color="transparent" /> */}
      <NavBar transparency={true} />
      <div data-aos="zoom-in-up" data-aos-duration="700">
        <ImageCarousel />
      </div>
    </div>
  );
}

export default Home;

