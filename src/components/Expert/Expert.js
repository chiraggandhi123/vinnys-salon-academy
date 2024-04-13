import React, { useEffect, useState } from "react";
import expertImg from "../../assets/expert/saksham.png";
import expertImg2 from "../../assets/expert/expert2.png";


import bigLogo from "../../assets/big-logo-1.png";
import frame from "../../assets/expert/frame.png";

import AOS from "aos";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import './index.scss';

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial:0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
console.log('instance', instanceRef);
  function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--left" + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    );
  }
  
  function ArrowRight(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--right" + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    );
  }
  return (
    <>
      <div className="navigation-wrapper expert">
        
      <img src={bigLogo} alt="logo" className="big-logo" />
    <img className="frame" src={frame} alt="frame" />
        <div ref={sliderRef} className="keen-slider">
        {/* <div className="container keen-slider__slide number-slide1">
           <a href="#" className="view">
             View all team
           </a>
           <div className="left" data-aos="zoom-out-right">
             <div className="card">
               <div className="card-header">
                 <img src={expertImg} alt="expert" />
               </div>
               <div className="card-content">
                 <h3>Mary Lucas</h3>
                 <h4>Manicurist</h4>
                 <a href="#">info@demolink</a>
               </div>
             </div>
           </div>
           <div className="right" data-aos="zoom-out-left">
             <div className="content">
               <h1>Meet Our Expert</h1>
               <p>
                 We employ the best manicurists and pedicurists in the industry. We
                 also educate our own award-winning specialists through constant
                 training. Here are the most prominent talents of our team who make
                 your dreams come true
               </p>
             </div>
           </div>
         </div> */}
         <div className="container keen-slider__slide number-slide2">
           {/* <a href="#" className="view">
             View all team
           </a> */}
           <div className="left" data-aos="zoom-out-right">
             <div className="card">
               <div className="card-header">
                 <img src={expertImg2} alt="expert" />
               </div>
               <div className="card-content">
                 <h3>Veena Gandhi</h3>
                 <h4>MakeUp Artist</h4>
                 {/* <a href="#">info@demolink</a> */}
               </div>
             </div>
           </div>
           <div className="right" data-aos="zoom-out-left">
             <div className="content">
               <h1>Meet Our Expert</h1>
               <p>
               A passionate makeup artist specializing in bridal glam, event makeup, and editorial looks. I bring a personalized touch, versatile styles, and top-quality products to make you feel and look your best. Let's collaborate on creating a stunning, customized makeup experience just for you! 💋✨
               </p>
             </div>
           </div>
         </div>
         <div className="container keen-slider__slide number-slide3">
           {/* <a href="#" className="view">
             View all team
           </a> */}
           <div className="left" data-aos="zoom-out-right">
             <div className="card">
               <div className="card-header">
                 <img src={expertImg} alt="expert" />
               </div>
               <div className="card-content">
                 <h3>Saksham Gandhi</h3>
                 <h4>Nail Artist</h4>
                 {/* <a href="#"></a> */}
               </div>
             </div>
           </div>
           <div className="right" data-aos="zoom-out-left">
             <div className="content">
               <h1>Meet Our Expert</h1>
               <p>
               Your nails are a canvas, and I am the painter. I understand that every individual has a unique style and personality. Whether you're looking for understated sophistication or bold and vibrant designs, I will work closely with you to create personalized nail art that perfectly suits your taste.
               </p>
             </div>
           </div>
         </div>
         {instanceRef && (
            <>
              <ArrowLeft
                onClick={(e) => e.stopPropagation() || instanceRef.prev()}
                disabled={currentSlide === 0}
                className="arrow"
              />
              <ArrowRight
                onClick={(e) =>{console.log('click', instanceRef); e.stopPropagation(); instanceRef.next()}}
                disabled={currentSlide === instanceRef.details().size - 1}
                className="arrow"
              />
            </>
          )}
        </div>

      </div>
      
    </>
  );
};
