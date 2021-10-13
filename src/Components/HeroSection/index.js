import React, { useState } from "react";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import Video2 from "../../videos/video3.mp4";
import ContactForm from "../../ContactForm";
const HeroSection = ({ isContact, Contacttoggle, lightbg }) => {
  console.log("isContact" + isContact);
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home" lightbg={lightbg}>
      <HeroBg>
        {lightbg ? (
          <VideoBg autoPlay loop muted src={Video2} type="video/mp4"></VideoBg>
        ) : (
          <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
        )}
      </HeroBg>
      <HeroContent isContact={isContact} Contacttoggle={Contacttoggle}>
        <HeroH1>Hi, I am Oguzhan Ozkan</HeroH1>
        <HeroP>If you want to contact me </HeroP>
        <HeroBtnWrapper>
          <Button
            onClick={Contacttoggle}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            to="#"
            style={{ color: "#fff" }}
          >
            Send Mail {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
      {isContact ? (
        <ContactForm isContact={isContact} Contacttoggle={Contacttoggle} />
      ) : (
        <></>
      )}
    </HeroContainer>
  );
};

export default HeroSection;
