import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };
  const handleAboutClick = () => {
    navigate("/about");
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="herosection">
        <div className="hero-content">
          <h1>
            We Build <br />
            <span>to Grow</span> <br />
            your idea
          </h1>
          <p>We have a industrially ready team to start a work on Project </p>
          <div className="hero-btn">
            <button onClick={handleContactClick}>Contact Us</button>
            <button onClick={handleAboutClick}>About Our Team</button>
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
