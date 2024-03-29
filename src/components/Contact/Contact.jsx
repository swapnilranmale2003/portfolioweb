import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Contact.css'
function Contact() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="contact-title">Contact Us</div>
      <div className="contact-form">
      <form action="">
        <input type="email" name="name" id="" placeholder='Enter your email' /> <br />
        <textarea name="" id="" cols="30" rows="10" placeholder='Message...'></textarea>
        <div className="contact-btn">
                <button>Submit</button>
              
            </div>
      </form>
      </div>
    </div>
  )
}

export default Contact
