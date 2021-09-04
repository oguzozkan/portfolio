import React, { useState, useEffect } from "react";
import Portfolio from "../Components/Portfolio";
import Footer from "../Components/Footer";
import InfoSection from "../Components/InfoSection";
import NavbarEx from "../Components/NavbarEx";
import NavHome2 from "../Components/NavHome2";
import {
  homeObjFive,
  homeObjFour,
  homeObjThree,
} from "../Components/InfoSection/Data";

const Home2 = () => {
  const [lightbg, setlight] = useState();
  const [closestate, setclose] = useState(false);

  const changeToggle = () => {
    setclose(!closestate);
  };

  const getStat = () => {
    const g = localStorage.getItem("bgStatus");
    if (JSON.parse(g) === true) {
      setlight(false);
    } else {
      setlight(true);
    }
  };

  const LightToggle = () => {
    getStat();
    setTimeout(() => {
      setlight(!lightbg);
    }, 10);

    localStorage.setItem("bgStatus", lightbg);
  };
  useEffect(() => {
    getStat();
    console.log("light", lightbg);
  });
  return (
    <>
      <NavHome2 lightbg={lightbg} LightToggle={LightToggle}></NavHome2>
      <Portfolio lightbg={lightbg} LightToggle={LightToggle}></Portfolio>
      <InfoSection
        {...homeObjThree}
        lightbg={lightbg}
        changeToggle={changeToggle}
      ></InfoSection>

      <InfoSection {...homeObjFour} lightbg={lightbg}></InfoSection>
      <InfoSection {...homeObjFive} lightbg={lightbg}></InfoSection>
      <NavbarEx closestate={closestate} changeToggle={changeToggle} />
      <Footer lightbg={lightbg}></Footer>
    </>
  );
};

export default Home2;
