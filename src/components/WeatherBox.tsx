import React from "react";
import "../css/WeatherBox.css";

type Props = {
  status: number;
};

export const WeatherBox = (props: Props) => {
  const visible = props.status === 200;
  return (
    <div id="weather-box" className={visible ? "visible" : "unvisible"}>
      <img src="" alt="Weather" />
      <p id="temperature"></p>
      <p id="description"></p>
    </div>
  );
};
