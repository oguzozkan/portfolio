import React, { useState, useEffect } from "react";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import BackgroundHistory from "./BackgroundHistory";
import styled from "styled-components";
import {
  backObjOne,
  backObjTwo,
  backObjThree,
} from "../Components/BackgroundHistory/Data";
import AOS from "aos";
import "aos/dist/aos.css";
// const slideData = [{ text: "skyline", img: { pati } }];
// const text2 = "deneme2";
// const myImgstyle = {
//   borderRadius: "20px",
//   height: "20px",
//   weight: "20px",
//   margin: "3px 3px 3px 3px",
// };

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 25px;
  padding-bottom: 60px;
  align-items: center;
  justify-content: center;
  background: #000;
`;

function Slide({ lightbg }) {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    /*
           <AppContainer className="resume">
        <ScrollingCarousel>
        {" "}
        <BackgroundHistory></BackgroundHistory>
        <BackgroundHistory></BackgroundHistory>
        <BackgroundHistory></BackgroundHistory>
      </ScrollingCarousel> */
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <Swiper
        className="mySwiper"
        spaceBetween={10}
        slidesPerView={1.1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ background: lightbg ? "#fff" : "#000" }}
      >
        <SwiperSlide>
          <BackgroundHistory
            {...backObjOne}
            lightbg={lightbg}
          ></BackgroundHistory>
        </SwiperSlide>
        <SwiperSlide>
          <BackgroundHistory
            {...backObjTwo}
            lightbg={lightbg}
          ></BackgroundHistory>
        </SwiperSlide>
        <SwiperSlide>
          <BackgroundHistory
            {...backObjThree}
            lightbg={lightbg}
          ></BackgroundHistory>
        </SwiperSlide>
      </Swiper>{" "}
    </div>
    /* <SlideElement
          image={man}
          text1="Personal"
          galleryGroup={(galleryState) => setGallery(0)}
          onClick={console.log({ galleryState })}
        />
        <SlideElement
          image={gallery}
          text1="Photo"
          galleryGroup={(galleryState) => setGallery(1)}
        />
        <SlideElement
          image={computer}
          text1="Work"
          galleryGroup={(galleryState) => setGallery(2)}
        />     </AppContainer>*/
  );
}
export default Slide;
