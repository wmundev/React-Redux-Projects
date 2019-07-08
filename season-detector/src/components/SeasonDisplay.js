import React from "react";
import "../style/SeasonDisplay.css";

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const seasonDetail = seasonInfo[season];
  return (
    <div className={`SeasonDisplay ${seasonDetail.display}`}>
      <i className={`icon ${seasonDetail.display}`}></i>
      <p>{seasonDetail.text}</p>
      <i className={`icon ${seasonDetail.display}`}></i>
    </div>
  );
};

const getSeason = (lat, month) => {
  if (month > 3 && month < 9 ) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};

const seasonInfo = {
  summer: {
    display: "sun",
    text: "It's summer, time to play!"
  },
  winter: {
    display: "snowflake",
    text: "It's winter, so cold!"
  }
};

export default SeasonDisplay;
