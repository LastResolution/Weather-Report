import React from "react";
import "../css/SearchBox.css";

export const SearchBox = () => {
  return (
    <div id="search-box">
      <i className="fa-solid fa-location-dot"></i>
      <input type="text" placeholder="Enter your location" />
      <button className="fa-solid fa-magnifying-glass"></button>
    </div>
  );
};
