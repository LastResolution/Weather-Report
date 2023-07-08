import React from "react";
import "../css/WeatherBox.css";
import { Weather } from "../api/weather";
import notFoundImage from "../images/404.png";
import clearImage from "../images/clear.png";
import cloudImage from "../images/cloud.png";
import mistImage from "../images/mist.png";
import rainImage from "../images/rain.png";
import snowImage from "../images/snow.png";

type Props = {
  status: number;
  weather: Weather | undefined;
};

export const WeatherBox = (props: Props) => {
  const visible = props.status === 200;

  const getWeatherImage = (value: string | undefined) => {
    console.log(value);
    switch (value) {
      case "Clear": {
        return clearImage;
      }
      case "Rain": {
        return rainImage;
      }
      case "Clouds": {
        return cloudImage;
      }
      case "Snow": {
        return snowImage;
      }
      case "Mist": {
        return mistImage;
      }
      default: {
        return notFoundImage;
      }
    }
  };

  const weatherImage = getWeatherImage(props.weather?.weather);

  return (
    <div id="weather-box" className={visible ? "visible" : "unvisible"}>
      <img src={weatherImage} alt="Weather" />
      <p id="temperature">
        {props.weather?.temperature.toString().split(".")[0]}
        <span>℃</span>
      </p>
      <p id="description">{props.weather?.description}</p>
    </div>
  );
};
