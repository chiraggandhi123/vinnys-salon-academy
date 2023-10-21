import React from "react";
// icons
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import google from "../../assets/icons/google.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import pinterest from "../../assets/icons/pinterest.svg";
import cart from "../../assets/icons/cart.svg";

const TopNav = ({ openoScial, setOpenSocial }) => {
  return (
    <div
      style={openoScial ? { right: 0 } : { right: "-100%" }}
      className="top-nav"
    >
      <i
        onClick={() => setOpenSocial(!openoScial)}
        className="fas fa-times"
      ></i>
      <div className="container">
        <div className="first-description">
          <h4 className="call">
            Free Call: <span>9873734959</span>, <span>7838636183 </span>
          </h4>
          <h4 className="opening">
            Opening Hours: <span>Mn-Fr: 10 am-8 pm</span>
          </h4>
        </div>
      <div className="last-description">
          <ul className="social">
            <li>
              <a href="https://www.facebook.com/p/Vinnys-Attraction-100063636560952/">
                <img src={facebook} alt="icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/vinnys_salon_academy/">
                <img src={instagram} alt="icon" />
              </a>
            </li>
            {/* <li>
              <a href="#">
                <img src={twitter} alt="icon" />
              </a>
            </li> */}
            <li>
              <a href="https://www.google.com/maps/place/Vinny's+Attraction+Beauty+Salon,+Fca-190,+East+Chawla+Colony,+Sector+4,+Ballabhgarh,+Faridabad,+Haryana+121004/@28.3434569,77.3264078,16z/data=!4m14!1m7!3m6!1s0x390cdb854c67e113:0x4251ad1bb26b6230!2sVinny's+Attraction+Beauty+Salon,+Fca-190,+East+Chawla+Colony,+Sector+4,+Ballabhgarh,+Faridabad,+Haryana+121004!8m2!3d28.346438!4d77.321888!16s%2Fg%2F11fylywjpm!3m5!1s0x390cdb854c67e113:0x4251ad1bb26b6230!8m2!3d28.346438!4d77.321888!16s%2Fg%2F11fylywjpm">
                <img src={google} alt="icon" />
              </a>
            </li>
            {/* <li>
              <a href="#">
                <img src={youtube} alt="icon" />
              </a>
            </li> */}
            {/* <li className="hidden">
              <a href="#">
                <img src={pinterest} alt="icon" />
              </a>
            </li>
            <li className="hidden">
              <a href="#">
                <img src={cart} alt="icon" />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Task for me: icons hover effect

export default TopNav;
