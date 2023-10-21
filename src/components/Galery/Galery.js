import React, { useEffect } from "react";
// images
import vector from "../../assets/galery/Vector.png";

import AOS from "aos";

const Galery = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="galery" data-aos="zoom-out-down">
      <h2 className="title">Galery of our work</h2>
      <img className="vector" src={vector} alt="vector" />
      <div className="grid-container">
        <div className="item grid-item little1"></div>
        <div className="item2 grid-item little1"></div>
        <div className="item3 grid-item big"></div>
        <div className="item4 grid-item little2"></div>
        <div className="item5 grid-item little2"></div>
        <div className="item6 grid-item big"></div>
        <div className="item8 grid-item little1"></div>
        <div className="item7 grid-item little1"></div>
        <div className="item9 grid-item big"></div>
        <div className="item10 grid-item big"></div>
        <div className="item11 grid-item big"></div>
        <div className="item12 grid-item big"></div>
      </div>
    </div>
  );
};

export default Galery;
