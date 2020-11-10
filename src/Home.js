import React from "react";
import MyNav from "./components/Nav";
import "./App.css";
import video from "./videos/video.mp4";

function Home() {
    return (
      <div>
      <MyNav color="transparent"/>
        <video autoPlay muted loop className="Video">
            <source src={video} type="video/mp4"/>
        </video>
      </div>
    );
  }
  
  export default Home;
  