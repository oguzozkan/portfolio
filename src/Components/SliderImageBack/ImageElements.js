import styled from "styled-components";

export const InfoContainerM = styled.div`
  background: ${({ lightbg }) =>
    lightbg
      ? `linear-gradient(90deg,
    rgba(220, 214, 156, 0.2) 0%,
    rgba(255, 255, 255, 1) 100%)`
      : `#000  `};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Img2 = styled.img`
  top: 50%;
  left: 50%;
  top: 0px;
  position: fixed;
  display: ${({ imageState2 }) => (imageState2 ? "inline" : "none")};
  width: 50%;
  z-index: -1;
  left: 435px;
`;
export const InfoWrapperM = styled.div`
  display: grid;
  z-index: 1;
  height: 350px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;

  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SliderImageDiv = styled.div``;
export const SliderImageMainDiv2 = styled.div`
  height: 700px;
  text-align: center;

  @media screen and (max-width: 768px) {
  }
`;
export const SliderImageDiv2 = styled.div`
  /* place-self: center; */

  text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  @media screen and (max-width: 768px) {
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  z-index: 4;
  opacity: ${({ imageState }) => (imageState ? "0.8" : "1")};
`;
