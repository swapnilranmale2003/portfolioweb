import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            Logo
        </div>
        <div className="menu">
            <ul>
                <Link className="white-link" to={"/"}>Home</Link>
                <Link className="white-link" to={"/about"}>About</Link>
                <Link className="white-link" to={"/service"}>Service</Link>
                <Link className="white-link" to={"/contact"}>Contact Us</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
