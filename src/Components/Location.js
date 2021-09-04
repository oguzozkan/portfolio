import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ResultWeather from "./ResultWeather";
import Globe from "./Globe";

const LocationContainer = styled.div`
  background: ${({ lightbg }) =>
    lightbg
      ? `linear-gradient(90deg,
    rgba(220, 214, 156, 0.2) 0%,
    rgba(255, 255, 255, 1) 100%)`
      : `#000`};
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30 px;
  height: 220px;
  position: relative;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
  }
`;
const ForecastWrapper = styled.div`
  flex-basis: 100%;
  margin: 20px 0;
  overflow: hidden;
  /* background: linear-gradient(45deg, #000 30%, #000608 60%); */
  border-radius: 20px 10px;
`;
export const LocationContent = styled.div`
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LocationH1 = styled.h1`
  color: ${({ lightbg }) => (lightbg ? "#000" : "#8FEFFF")};
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480) {
    font-size: 32px;
  }
`;
const Location = ({ lightbg }) => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [status, setStatus] = useState(false);
  const [weather, setWeather] = useState({ temp: null, weatherStatus: null });

  const getStateWeather = () => {
    console.log("api" + status);
    let one =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lng +
      "&exclude=daily&appid=0f2732bccb4571c4ff0057486c17a930";
    axios.get(one).then((res) => {
      const datas = res.data.current.weather[0].main;
      console.log(datas);
      console.log("temp" + res.data.current.temp);

      setWeather((prevState) => ({
        ...prevState,
        weatherStatus: datas,
        temp: res.data.current.temp,
      }));
      setStatus(true);
    });
  };

  const getLocation = () => {
    console.log("loc" + status);
    if (!navigator.geolocation) {
      setStatus(false);
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);

          setTimeout(getStateWeather, 1000);
        },
        () => {
          setStatus(false);
        }
      );
    }
  };

  useEffect(() => {
    console.log("eff" + status);
    getLocation();
  }, []);

  return (
    <>
      {console.log("return" + status)}
      {status ? (
        <LocationContainer lightbg={lightbg}>
          {status}
          <LocationContent>
            <ResultWeather
              weather={weather.weatherStatus}
              lightbg={lightbg}
            ></ResultWeather>

            <ForecastWrapper>
              <LocationH1 lightbg={lightbg}>
                {`°` + Math.floor(weather.temp) / 10}
              </LocationH1>
            </ForecastWrapper>
          </LocationContent>
        </LocationContainer>
      ) : (
        <LocationContainer>
          <LocationContent>
            <LocationH1>
              {/* <p>LOADING...{status}</p> */}
              <Globe className="App-logo"></Globe>
            </LocationH1>
          </LocationContent>
        </LocationContainer>
      )}
    </>
  );
};

export default Location;
