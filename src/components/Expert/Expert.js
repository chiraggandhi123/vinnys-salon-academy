import React, { useEffect, useState } from "react";
import expertImg from "../../assets/expert/saksham.png";
import bigLogo from "../../assets/big-logo-1.png";
import frame from "../../assets/expert/frame.png";

import AOS from "aos";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import './index.scss';

//  const Expert = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 2000,
//     });
//   }, []);
//   const [sliderRef, instanceRef] = useKeenSlider({
//     loop:true
//   }
//   )

//   return (
//     <div className="expert">
//       <img src={bigLogo} alt="logo" className="big-logo" />
//       <img className="frame" src={frame} alt="frame" />
//       <div ref={sliderRef} className="keen-slider">
//         <div className="container keen-slider__slide number-slide1">
//           <a href="#" className="view">
//             View all team
//           </a>
//           <div className="left" data-aos="zoom-out-right">
//             <div className="card">
//               <div className="card-header">
//                 <img src={expertImg} alt="expert" />
//               </div>
//               <div className="card-content">
//                 <h3>Mary Lucas</h3>
//                 <h4>Manicurist</h4>
//                 <a href="#">info@demolink</a>
//               </div>
//             </div>
//           </div>
//           <div className="right" data-aos="zoom-out-left">
//             <div className="content">
//               <h1>Meet Our Expert</h1>
//               <p>
//                 We employ the best manicurists and pedicurists in the industry. We
//                 also educate our own award-winning specialists through constant
//                 training. Here are the most prominent talents of our team who make
//                 your dreams come true
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="container keen-slider__slide number-slide2">
//           <a href="#" className="view">
//             View all team
//           </a>
//           <div className="left" data-aos="zoom-out-right">
//             <div className="card">
//               <div className="card-header">
//                 <img src={expertImg} alt="expert" />
//               </div>
//               <div className="card-content">
//                 <h3>Mary Lucas</h3>
//                 <h4>Manicurist</h4>
//                 <a href="#">info@demolink</a>
//               </div>
//             </div>
//           </div>
//           <div className="right" data-aos="zoom-out-left">
//             <div className="content">
//               <h1>Meet Our Expert</h1>
//               <p>
//                 We employ the best manicurists and pedicurists in the industry. We
//                 also educate our own award-winning specialists through constant
//                 training. Here are the most prominent talents of our team who make
//                 your dreams come true
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Expert;

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
        <div className="container keen-slider__slide number-slide1">
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
         </div>
         <div className="container keen-slider__slide number-slide2">
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
         </div>
         <div className="container keen-slider__slide number-slide3">
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
