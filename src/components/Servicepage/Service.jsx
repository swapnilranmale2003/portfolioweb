import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FaLaptop } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";
import { LuCopyright } from "react-icons/lu";
import { FaMobileAlt } from "react-icons/fa";

import "./Service.css";
function Service() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="servicetitle">Our Services</div>
      <div className="services-3">
        <div className="service-box1">
          <div className="icons">
            <FaLaptop size={"2rem"} color="red" />
          </div>
          <div className="service-content">
            <h4>Web & Mobile Specialties</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              dignissimos odio ullam, totam deleniti possimus?
            </p>
            <Link>Learn more...</Link>
          </div>
        </div>
        <div className="service-box1">
          <div className="icons">
            <IoCartSharp size={"2rem"} color="red" />
          </div>
          <div className="service-content">
            <h4>eCommerce</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              dignissimos odio ullam, totam deleniti possimus?
            </p>
            <Link>Learn more...</Link>
          </div>
        </div>
        <div className="service-box1">
          <div className="icons">
            <FaLaptop size={"2rem"} color="red" />
          </div>
          <div className="service-content">
            <h4>Web Applications</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              dignissimos odio ullam, totam deleniti possimus?
            </p>
            <Link>Learn more...</Link>
          </div>
        </div>
      </div>
      <div className="services-3">
        <div className="service-box1">
          <div className="icons">
            <FaLaptop size={"2rem"} color="red" />
          </div>
          <div className="service-content">
            <h4>Branding</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              dignissimos odio ullam, totam deleniti possimus?
            </p>
            <Link>Learn more...</Link>
          </div>
        </div>
        <div className="service-box1">
          <div className="icons">
            <LuCopyright size={"2rem"} color="red" />
          </div>
          <div className="service-content">
            <h4>Copy Writing</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              dignissimos odio ullam, totam deleniti possimus?
            </p>
            <Link>Learn more...</Link>
          </div>
        </div>
        <div className="service-box1">
          <div className="icons">
            <FaMobileAlt  size={"2rem"} color="red" />
          </div>
          <div className="service-content">
            <h4>Mobile Applications</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              dignissimos odio ullam, totam deleniti possimus?
            </p>
            <Link>Learn more...</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
