import React from "react";
import notFoundImage from "../images/404.png";
import "../css/NotFound.css";

type Props = {
  status: number;
};

export const NotFound = (props: Props) => {
  const visible = props.status === 404;
  return (
    <div id="not-found" className={visible ? "visible" : "unvisible"}>
      <img src={notFoundImage} alt="Not Found" />
      <p>Oops! Invalid location :/</p>
    </div>
  );
};
