import React, { useEffect } from "react";
// images
import icon1 from "../../assets/category/category-icon-1.png";
import icon2 from "../../assets/category/category-icon-2.png";
import icon3 from "../../assets/category/category-icon-3.png";
import icon4 from "../../assets/category/category-icon-4.png";

import shape from "../../assets/category-shape.png";

import AOS from "aos";

const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="category">
      <div className="left">
        <img src={shape} className="shape-bg" />
        <div className="row">
          <div className="col" data-aos="flip-left">
            <img src={icon1} alt="icon" />
            <h4>MakeUp</h4>
            <p>
            "Elevate your natural beauty, leaving skin radiant and flawless"
            </p>
          </div>
          <div className="col" data-aos="flip-left">
            <img src={icon2} alt="icon" />
            <h4>Hairs</h4>
            <p>
            "For hair that radiates with health, beauty, and vibrancy, choose our services"
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col" data-aos="flip-left">
            <img src={icon3} alt="icon" />
            <h4>Nail Art</h4>
            <p>
              Let our nail artists create a stunning and sustainable <br /> nail
              design for you.
            </p>
          </div>
          <div className="col hidden" data-aos="flip-left">
            <img src={icon4} alt="icon" />
            <h4>Paraffin Wax</h4>
            <p>
              This is treatment for hands and feet that complements your
              manicure and pedicure.
            </p>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Category;
