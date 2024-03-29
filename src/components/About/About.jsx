import React from "react";
import Navbar from "../Navbar/Navbar";
import { FaLaptop } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

import {Link} from 'react-router-dom'
import "./About.css";
function About() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="about-section">
        <div className="about-left">
          <div className="about-content">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              rem aperiam nostrum sequi laborum nesciunt facilis, eligendi at
              recusandae necessitatibus delectus voluptatum architecto
              dignissimos earum, minima a, eos amet eveniet!
            </p>
          </div>
          <div className="about-service-box">
            <div className="box1">
              <FaLaptop size={'2rem'} />
              <h3>Web & Mobile Specialties</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</p>
              <Link>Learn more...</Link>
            </div>
            <div className="box1">
              <FaUserAlt size={'2rem'} />
              <h3>Intuitive Thinkers</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</p>
              <Link>Learn more...</Link>
            </div>  
          </div>
        </div>
        <div className="about-right">
          <img src="assets/ap.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
