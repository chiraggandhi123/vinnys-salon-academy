import React from "react";
// images
import frame from "../../assets/Contact/Frame.png";

import man from "../../assets/Contact/man.svg";
import mail from "../../assets/Contact/mail.svg";
import phone from "../../assets/Contact/phone.svg";
import type from "../../assets/Contact/type.svg";

const Contact = () => {
  function whatsapp(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    console.log('name', name, email, phone, message);
    if(name && email && phone && message){
      window.location.href = `https://wa.me/7838636183?text=${message}%0a`
    }
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <iframe
          width="520"
          height="535"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.41029466687!2d77.31701708250324!3d28.346442634692124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb854c67e113%3A0x4251ad1bb26b6230!2sVinny&#39;s%20Attraction%20Beauty%20Salon!5e0!3m2!1sen!2sin!4v1713075319898!5m2!1sen!2sin"
        ></iframe>
        <a href="https://www.counters-free.net/">
          https://www.counters-free.net
        </a>{" "}
      </div>
      <div className="right">
        <img src={frame} alt="frame" className="frame" />
        <h2>Get In Touch</h2>
        <span></span>
        <p>
          Have any questions? Feel free to use the contact form below to got in
          <br />
          touch with us. We will answer you as soon as possible!
        </p>
        <div className="form">
          <div className="input">
            <img src={man} alt="man" />
            <input id="name" type="text" placeholder="Your Name" />
          </div>
          <div className="input">
            <img src={mail} alt="mail" />
            <input id="email" type="email" placeholder="Your Email" />
          </div>
          <div className="input">
            <img src={phone} alt="phone" />
            <input id="phone" type="number" placeholder="Your Phone" />
          </div>
          <div className="input">
            <img className="type" src={type} alt="type" />
            <textarea id="message" type="number" placeholder="Your Messasge"></textarea>
          </div>
          <div className="input">
            <button onClick={()=>{
              whatsapp();
            }}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
