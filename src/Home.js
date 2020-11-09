import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import video from "./videos/video.mp4";

function Home() {
    return (
      <div>
      <Nav color="transparent"/>
        <video autoPlay muted loop className="myVideo">
            <source src={video} type="video/mp4"/>
        </video>
      </div>
    );
  }
  
  export default Home;
  