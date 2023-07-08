import React from "react";
import "../css/WeatherDetails.css";
import { Weather } from "../api/weather";

type Props = {
  status: number;
  weather: Weather | undefined;
};

export const WeatherDetails = (props: Props) => {
  const visible = props.status === 200;
  return (
    <div id="weather-details" className={visible ? "visible" : "unvisible"}>
      <div id="humidity">
        <i className="fa-solid fa-water"></i>
        <div className="text">
          <span>{props.weather?.humidity.toString().split(".")[0]}%</span>
          <p>Humidity</p>
        </div>
      </div>
      <div id="wind">
        <i className="fa-solid fa-wind"></i>
        <div className="text">
          <span>{props.weather?.wind.toString().split(".")[0]}Km/h</span>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};
