import React, { useEffect, useState } from "react";
import img1 from "../../images/elixir_logo_320.png";
import img2 from "../../images/img4.jpg";
import img3 from "../../images/img3.jpg";
import { Redirect } from "react-router-dom";
import {
  PortfolioContainer,
  PortfolioWrap,
  PortfolioCart,
  PortfolioH1,
  PortfolioP,
  Img,
  ImgWrap,
  ImgIcon,
} from "./PortfolioElements";

import { FaBitcoin } from "react-icons/fa";

const Portfolio = ({ lightbg, LightToggle }) => {
  return (
    <>
      <PortfolioContainer lightbg={lightbg}>
        <PortfolioWrap>
          <PortfolioCart lightbg={lightbg}>
            <ImgWrap>
              <Img src={img1} alt="error"></Img>
            </ImgWrap>
            <PortfolioH1 lightbg={lightbg}>Elixir</PortfolioH1>
            <PortfolioP lightbg={lightbg}>
              Smart irrigation and agriculture system
            </PortfolioP>
          </PortfolioCart>
          <PortfolioCart lightbg={lightbg}>
            <ImgWrap>
              <ImgIcon lightbg={lightbg}>
                <FaBitcoin />
              </ImgIcon>
            </ImgWrap>
            <PortfolioH1 lightbg={lightbg}>Trading Bot</PortfolioH1>
            <PortfolioP lightbg={lightbg}>Python</PortfolioP>
          </PortfolioCart>
          <PortfolioCart lightbg={lightbg}>
            <ImgWrap>
              <Img src={img3} alt="error"></Img>
            </ImgWrap>
            <PortfolioH1 lightbg={lightbg}>Portfolio</PortfolioH1>
            <PortfolioP lightbg={lightbg}>React Js</PortfolioP>
          </PortfolioCart>
        </PortfolioWrap>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
