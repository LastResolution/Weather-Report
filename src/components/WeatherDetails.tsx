import React from "react";
import "../css/WeatherDetails.css";

type Props = {
  status: number;
};

export const WeatherDetails = (props: Props) => {
  const visible = props.status === 200;
  return (
    <div id="weather-details" className={visible ? "visible" : "unvisible"}>
      <div id="humidity">
        <i className="fa-solid fa-water"></i>
        <div className="text">
          <span></span>
          <p>Humidity</p>
        </div>
      </div>
      <div id="wind">
        <i className="fa-solid fa-wind"></i>
        <div className="text">
          <span></span>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};
