import React from "react";

export const SearchBox = () => {
  return (
    <div id="search-box">
      <i className="fa-solid fa-location-dot"></i>
      <input type="text" placeholder="Enter your location" />
      <button className="fa-solid fa-magnifying-glass"></button>
    </div>
  );
};
