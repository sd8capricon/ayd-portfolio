import React from "react";
import "./App.css"
import back from "./videos/video.mp4"

function Home() {
    return (
      <div>
        <video autoPlay muted loop id="myVideo">
            <source src={back} type="video/mp4"/>
        </video>
        <h1>Home Page</h1>  
      </div>
    );
  }
  
  export default Home;
  