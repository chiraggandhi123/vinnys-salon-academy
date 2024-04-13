import React, { useEffect } from "react";
// images
import vector from "../../assets/galery/Vector.png";

// Import Swiper styles
import { Swiper } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination.min.css";
import "swiper/modules/navigation.min.css";
import "./index.scss";
import AOS from "aos";

const Galery = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //   });
  // }, []);
  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      // slidesPerView: 1,
      // loop: true,
      // slidesPerGroup: 1,
      // observer: true,
      // observeParents: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    swiper.on("slideChange", () => {
      console.log("changed====>");
    });
  }, []);
  return (
    <>
    <div className="gallery-container">
      <h2 className="heading">SNAPSHOTS</h2>
      <div id="gallery" class="container-fluid galery">
        <img
          class="img-responsive grid-item"
        />
        <img
          // src="https://source.unsplash.com/1024x768?female,portrait"
          class="img-responsive grid-item"
        />
        <img
          // src="https://source.unsplash.com/1366x768?female,portrait"
          class="img-responsive grid-item"
        />
        <img
          // src="https://source.unsplash.com/1920x1080?female,portrait"
          class="img-responsive grid-item"
        />
        <img
          // src="https://source.unsplash.com/640x360?female,portrait"
          class="img-responsive grid-item"
        />
        <img
          // src="https://source.unsplash.com/320x640?female,portrait"
          class="img-responsive grid-item"
        />
        <img
          // src="https://source.unsplash.com/1200x1600?female,portrait"
          class="card img-responsive grid-item"
        />
        <img
          // src="https://source.unsplash.com/800x600?female,portrait"
          class="img-responsive grid-item"
        />
        <img
          // src="https://source.unsplash.com/600x800?female,portrait"
          class="img-responsive grid-item"
        />
        <img
          // src="https://source.unsplash.com/400x600?female,portrait"
          class="img-responsive grid-item"
        />
        <img
          // src="https://source.unsplash.com/600x400?female,portrait"
          class="img-responsive grid-item"
        />
        <img
          // src="https://source.unsplash.com/1100x1600?female,portrait"
          class="img-responsive grid-item"
        />
        <img
          // src="https://source.unsplash.com/1600x1100?female,portrait"
          class="img-responsive grid-item"
        />
        <img
          // src="https://source.unsplash.com/992x768?female,portrait"
          class="img-responsive grid-item"
        />
        <img
          // src="https://source.unsplash.com/768x992?female,portrait"
          class="img-responsive grid-item"
        />
      </div>
    </div>
    </>
  );
};

export default Galery;
