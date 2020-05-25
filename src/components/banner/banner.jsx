import React from "react";
import "./banner.scss";

const bannerImagesName = ["s1", "s2", "s3", "s4", "s5"];

const Banner = ({ message }) => {
  const personImgName = bannerImagesName[parseInt(Math.random() * 5)];
  return (
    <div className="ui-tpt-banner">
      <div className="ui-c">
        <div className="ui-f banner">
          <div className={`person ${personImgName}`}></div>
        </div>
        <div className="ui-f text">
          <div className="text-c">{message}</div>
        </div>
      </div>
      <div className="waves"></div>
    </div>
  );
};

export default Banner;
