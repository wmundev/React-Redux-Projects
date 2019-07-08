import React from "react";
import "../style/SeasonDisplay.css";

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const seasonDetail = seasonInfo[season];
  return (
    <div className={`SeasonDisplay ${season}`}>
      <i className={`left icon massive ${seasonDetail.display}`} />
      <h1 className="text">{seasonDetail.text}</h1>
      <i className={`right icon massive ${seasonDetail.display}`} />
    </div>
  );
};

const getSeason = (lat, month) => {
  if (month > 3 && month < 9) {
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
