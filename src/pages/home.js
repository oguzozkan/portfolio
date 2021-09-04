import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Content from "./Content";
import Footer from "../Components/Footer";
import GalaryRew from "../Components/Galary/GalaryRew";
import InfoSection from "../Components/InfoSection";
import ImagesShadow from "../Components/ImagesShadow";
import Location from "../Components/Location";
import Slide from "../Components/Slide";
import SliderImageBack from "../Components/SliderImageBack";
import Paticart from "../Components/Paticart";
import { homeObjOne, homeObjTwo } from "../Components/InfoSection/Data";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isContact, setContact] = useState(false);

  const Contacttoggle = () => {
    setContact(!isContact);
  };
  const [lightbg, setLight] = useState();

  const LightToggle = () => {
    setLight(!lightbg);
    localStorage.setItem("bgStatus", lightbg);
  };
  useEffect(() => {
    localStorage.getItem("bgStatus", lightbg);
    if (lightbg == null) {
      setLight(true);
    } else if (lightbg === "true") {
      setLight(true);
    } else {
      setLight(false);
    }
  }, []);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} LightToggle={LightToggle} lightbg={lightbg} />
      <HeroSection
        isContact={isContact}
        Contacttoggle={Contacttoggle}
        lightbg={lightbg}
      ></HeroSection>
      {/* <ImagesShadow lightbg={lightbg}></ImagesShadow> */}
      <SliderImageBack lightbg={lightbg}></SliderImageBack>
      <InfoSection {...homeObjOne} lightbg={lightbg}></InfoSection>
      <Slide lightbg={lightbg} />
      <InfoSection {...homeObjTwo} lightbg={lightbg}></InfoSection>
      {/* <GalaryRew /> */}
      <Paticart />
      {/* <Location lightbg /> */}
      {/* <Globe className="App-logo" /> */}

      <Footer lightbg={lightbg} />
    </>
  );
};

export default Home;
