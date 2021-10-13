import React, { useEffect } from "react";
import { Button } from "../ButtonHref";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";
const InfoSection = ({
  lightbg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  primary,
  dark,
  dark2,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  Hlink,
  LinkPr,
  LinkDesPr,
  changeToggle,
  btndisplay,
}) => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <InfoContainer lightbg={lightbg} id={id}>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={!lightbg}>{headline}</Heading>
                  <Subtitle darkText={lightbg}>{description}</Subtitle>
                  <BtnWrap btndisplay={btndisplay}>
                    <Button primary="true" dark="true" lightbg={lightbg}>
                      <a
                        href={LinkPr}
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                        }}
                      >
                        {LinkDesPr}
                      </a>
                      {/* <Button
                    to="/deneme"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    lightbg={lightbg}
                  >
                    {buttonLabel} */}
                    </Button>
                  </BtnWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} onClick={changeToggle} />
                </ImgWrap>
              </Column2>
            </InfoRow>{" "}
          </InfoWrapper>
        </div>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
