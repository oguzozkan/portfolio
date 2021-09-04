import React, { useEffect, useState } from "react";

import imgPath2 from "../../images/mv1.png";
import webpPath1 from "../../images/mv2.webp";
import imgPath1 from "../../images/mv4.png";
import webpPath2 from "../../images/mv1.webp";
import {
  SliderImageDiv2,
  SliderImageDiv,
  ImgWrap,
  InfoWrapperM,
  Img2,
  InfoContainerM,
  Img,
  SliderImageMainDiv2,
} from "./ImageElements";

const SliderImageBack = ({ lightbg }) => {
  const [imageState, setImage] = useState(false);
  const [imageState2, setImage2] = useState(false);
  const changeStatuofImg1 = () => {
    if (window.scrollY <= 820) {
      setImage(false);
      console.log("Ptrue" + imageState);
    } else {
      console.log("Pfalse" + imageState);
      setImage(true);
    }
  };

  const changeStatuofImg2 = () => {
    if (window.scrollY <= 950) {
      setImage2(true);
      console.log("Ptrue" + imageState2);
    } else {
      console.log("Pfalse" + imageState2);
      setImage2(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeStatuofImg1);
    window.addEventListener("scroll", changeStatuofImg2);
  }, []);

  return (
    <>
      {/* <InfoContainerM >
        <InfoWrapperM></InfoWrapperM>
        <SliderImageDiv imageState={imageState}>
    
     
        </SliderImageDiv>
      </InfoContainerM> */}
      <InfoContainerM lightbg={lightbg}>
        <SliderImageMainDiv2>
          <SliderImageDiv2 imageState2={imageState2}>
            <ImgWrap imageState2={imageState2}>
              <SliderImageDiv>
                <Img2
                  src={imgPath2}
                  imageState2={imageState2}
                  alt="I'm a webp image"
                />
              </SliderImageDiv>
              <Img
                src={imgPath1}
                imageState={imageState}
                alt="I'm a webp image"
              />
            </ImgWrap>
          </SliderImageDiv2>
        </SliderImageMainDiv2>
      </InfoContainerM>
    </>
  );
};

export default SliderImageBack;
