import React from "react";
import BottomFooter from "./BottomFooter";
// images
import footer1 from "../../assets/Footer/icon1.svg";
import footer2 from "../../assets/Footer/icon2.svg";
import footer3 from "../../assets/Footer/icon3.svg";

const TopFooter = () => {
  return (
    <>
      <div className="top-footer">
        <div className="container">
          <div className="item">
            <h3>About</h3>
            <span></span>
            <p>
              Vinny's Salon & Academy has been offering an extensive range of beauty
              services and skin treatments since 1999
            </p>
          </div>
          <div className="item">
            <h3>Opening Hours</h3>
            <span></span>
            <p>
              Mon-Sun: 10 am - 6 pm 
            </p>
          </div>
          <div className="item">
            <h3>Contact</h3>
            <span></span>
            <div className="loc">
              <img src={footer1} alt="icon" />
              <h4>FCA-190, EAST CHAWLA COLONY, BALLABGARH</h4>
            </div>
            <div className="loc">
              <img src={footer2} alt="icon" />
              <h4>9873571752, 7838636183 </h4>
            </div>
            <div className="loc">
              <img src={footer3} alt="icon" />
              <h4>veenagandhi17@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>
      <BottomFooter />
    </>
  );
};

export default TopFooter;
