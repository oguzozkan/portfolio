import React from "react";
import { Button } from "../ButtonHref";
import {
  BackCardR,
  BackCardL,
  BackWrapper,
  BackgroundCointainer,
  BackRH,
  BackRP,
  BackRA,
} from "./BackgroundElements";

const BackgroundHistory = ({
  HeadingPr,
  InfoPr,
  LinkPr,
  LinkDesPr,
  BgColor,
  img,
  lightbg,
}) => {
  return (
    <>
      <BackgroundCointainer lightbg={lightbg}>
        <BackWrapper>
          <BackCardL img={img}></BackCardL>
          <BackCardR lightbg={lightbg}>
            <BackRH>{HeadingPr}</BackRH>
            <BackRP>{InfoPr}</BackRP>
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
            </Button>
          </BackCardR>
        </BackWrapper>
      </BackgroundCointainer>
    </>
  );
};

export default BackgroundHistory;
