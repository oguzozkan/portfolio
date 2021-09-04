import { InfoContainerM, InfoWrapperM, Img2 } from "./ShadowElements";
import imgPath1 from "../../images/mv1.png";
import React from "react";

const ImagesShadow = ({ lightbg }) => {
  return (
    <>
      <InfoContainerM lightbg={lightbg}>
        <InfoWrapperM>
          <Img2 src={imgPath1} alt="I'm a webp image" />
        </InfoWrapperM>
      </InfoContainerM>
    </>
  );
};

export default ImagesShadow;
