import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

const WeatherIcon = styled.div`
  display: flex;
  z-index: 0;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  color: ${({ lightbg }) => (lightbg ? "#000" : "#8FEFFF")};
  @media screen and (max-width: 768px) {
    font-size: 100px;
    justify-content: flex-end;
  }
  @media screen and (max-width: 1024px) {
    font-size: 120px;
  }
  @media screen and (max-width: 1440px) {
    font-size: 140px;
  }
`;
const ResultWeather = ({ weather, lightbg }) => {
  let weatherIcon = null;
  if (weather === "Thunderstorm") {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (weather === "Drizzle") {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (weather === "Rain") {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (weather === "Snow") {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (weather === "Clear") {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (weather === "Clouds") {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }

  return <WeatherIcon lightbg={lightbg}>{weatherIcon}</WeatherIcon>;
};

export default ResultWeather;
