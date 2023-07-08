import React from "react";
import "../css/WeatherBox.css";

export const WeatherBox = () => {
  return (
    <div id="weather-box">
      <img src="" alt="Weather" />
      <p id="temperature"></p>
      <p id="description"></p>
    </div>
  );
};
