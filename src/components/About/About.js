import React, { useEffect } from "react";
// images
import topShape from "../../assets/corner-top.png";
import bottomShape from "../../assets/corner-bottom.png";
import bigLogo from "../../assets/big-logo-1.png";
import girl from "../../assets/girl.png";
import girlMobile from "../../assets/about/about-mobile.png";
// animation
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="about" id="about">
      <img className="logo-opacity" src={bigLogo} alt="big-logo" />
      <div className="container">
        <div className="left" data-aos="fade-right">
          <img className="girl" src={girl} alt="girl" />
          <img className="girl-mobile" src={girlMobile} alt="girl" />
        </div>
        <div className="right" data-aos="fade-left">
          <h2>
            <div>Why Our Clients</div>
            <div>
              <span></span>
              Choose Us
            </div>
          </h2>
          <h3>
            Our salon aims to deliver the best salon experience and
            top-notch customer service.
          </h3>
          <p>

Clients choose us because we offer a unique blend of expertise, personalized service, and a commitment to quality. Our experienced team uses top-notch products in a clean and safe environment to ensure your satisfaction. We aim to create a relaxing and enjoyable atmosphere where you can indulge in affordable luxury. Our track record of repeat clients speaks to the trust and confidence our patrons have in our services. When you choose our salon, you're choosing an exceptional beauty experience that caters to your individual needs and style.
          </p>
          {/* <a href="#">Read more</a> */}
        </div>
      </div>
      <img className="top-shape" src={topShape} alt="shape" />
      <img className="bottom-shape" src={bottomShape} alt="shape" />
    </div>
  );
};

export default About;
