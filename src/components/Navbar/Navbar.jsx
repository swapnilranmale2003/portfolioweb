import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            Logo
        </div>
        <div className="menu">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
