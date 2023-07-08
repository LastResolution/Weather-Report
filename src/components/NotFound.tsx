import React from "react";
import notFoundImage from "../images/404.png";
import "../css/NotFound.css";

export const NotFound = () => {
  return (
    <div id="not-found">
      <img src={notFoundImage} alt="Not Found" />
      <p>Oops! Invalid location :/</p>
    </div>
  );
};
