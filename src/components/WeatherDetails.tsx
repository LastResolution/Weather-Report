import React from "react";
import "../css/WeatherDetails.css";

export const WeatherDetails = () => {
  return (
    <div id="weather-details">
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
