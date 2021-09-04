import styled from "styled-components";

export const InfoContainerM = styled.div`
  color: #fff;
  /* background: ${({ lightbg }) => (lightbg ? "#f9f9f9" : "#010606")}; */
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
  width: 100%;
  height: auto;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
export const InfoWrapperM = styled.div`
  display: grid;
  z-index: 1;
  height: 650px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
