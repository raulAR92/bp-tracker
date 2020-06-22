import React, { useState } from "react";
import Particles from "react-particles-js";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "proptypes";
import Collapse from "@material-ui/core/Collapse";
import "./banner2.scss";

const bannerImagesName = ["s1", "s2", "s3", "s4", "s5"];
const personImgName = bannerImagesName[parseInt(Math.random() * 5)];

const Banner = ({ message, menuButton }) => {
  return (
    <div className="ui-bpt-banner">
      <Collapse in={true}>
        <Particles
          className="bg_svg animated"
          params={{
            particles: {
              number: {
                value: 15,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 60,
                random: true,
                anim: {
                  speed: 1,
                  size_min: 45,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 0.5,
                direction: "top",
                out_mode: "out",
              },
            },
          }}
        ></Particles>
        <div className="bg_svg content">
          <div className={`person ${personImgName}`}>
            <label htmlFor="icon-button-file">
              <IconButton
                color="default"
                aria-label="upload picture"
                component="span"
                onClick={menuButton.handleClick(true)}
              >
                {menuButton.icon}
              </IconButton>
            </label>
          </div>
          <div className="message-container">
            <div className="text">{message}</div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

Banner.propTypes = {
  message: PropTypes.string.isRequired,
  menuButton: PropTypes.shape({
    icon: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
  }),
};

export default Banner;
