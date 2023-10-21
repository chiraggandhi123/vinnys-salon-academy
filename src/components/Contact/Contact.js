import React from "react";
// images
import frame from "../../assets/Contact/Frame.png";

import man from "../../assets/Contact/man.svg";
import mail from "../../assets/Contact/mail.svg";
import phone from "../../assets/Contact/phone.svg";
import type from "../../assets/Contact/type.svg";

const Contact = () => {
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
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d938.8410775902081!2d77.32186727378597!3d28.345856057734032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1697743749020!5m2!1sen!2sin"
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
        <form>
          <div className="input">
            <img src={man} alt="man" />
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="input">
            <img src={mail} alt="mail" />
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="input">
            <img src={phone} alt="phone" />
            <input type="number" placeholder="Your Phone" />
          </div>
          <div className="input">
            <img className="type" src={type} alt="type" />
            <textarea type="number" placeholder="Your Messasge"></textarea>
          </div>
          <div className="input">
            <button type="submit" type="number">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
