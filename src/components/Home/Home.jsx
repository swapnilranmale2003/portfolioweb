import React from "react";
import Navbar from "../Navbar/Navbar";
import './Home.css'
function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="herosection">
        <div className="hero-content">
            <h1>We Build <br /><span>to Grow</span> <br />your idea</h1>
            <p>We have a industrial ready team to start a work on Project </p>
            <div className="hero-btn">
                <button>Contact Us</button>
                <button>About Our Team</button>
            </div>
          </div>
        <div className="hero-right">
            <img src="assets/home.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
