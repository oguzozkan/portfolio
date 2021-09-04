import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import PatiSvg from "../images/paticloud9.png";

const Pati = styled.div`
  position: absolute;

  top: 200px;
  right: 0px;
  z-index: 1;
  display: ${({ patiState }) => (patiState ? "none" : "flex")};
  position: ${({ patiState }) => (patiState ? "absolute" : "fixed")};

  @media screen and (max-width: 768px) {
  }
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  opacity: ${({ patiState }) => (patiState ? "1" : "0.6")};
`;

const Paticart = () => {
  const [patiState, setPati] = useState(false);

  const changeStatuofPati = () => {
    if (window.scrollY <= 2700) {
      setPati(true);
      console.log("Ptrue" + patiState);
    } else {
      console.log("Pfalse" + patiState);
      setPati(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeStatuofPati);
    AOS.init({});
  }, []);

  return (
    <>
      {patiState ? (
        <></>
      ) : (
        <Pati
          patiState={patiState}
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1200"
        >
          <Img src={PatiSvg} patiState={patiState}></Img>
        </Pati>
      )}
    </>
  );
};

export default Paticart;
