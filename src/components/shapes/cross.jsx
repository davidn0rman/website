// import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./cross.module.scss";

const Cross = ({
  bottom,
  colour,
  opacity,
  left,
  right,
  top,
  size,
  rotate,
}) => {
  const classes = classNames(
    styles.cross,
    colour === "purple" ? `${styles.purple}` : "",
    colour === "blue" ? `${styles.blue}` : "",
  );

  return (
    <div
      className={classes}
      style={
        {
          bottom: `${bottom}%`,
          height: `${size}rem`,
          left: `${left}%`,
          opacity,
          right: `${right}%`,
          top: `${top}%`,
          transform: `rotate(${rotate}deg)`,
          width: `${size}rem`,
        }
      }
    />
  );
};

Cross.propTypes = {
  bottom: PropTypes.string,
  colour: PropTypes.string,
  left: PropTypes.string,
  opacity: PropTypes.string,
  right: PropTypes.string,
  rotate: PropTypes.string,
  size: PropTypes.string,
  top: PropTypes.string,
};

Cross.defaultProps = {
  bottom: "",
  colour: "",
  left: "",
  opacity: "1",
  right: "",
  rotate: "",
  size: "3",
  top: "",
};

export default Cross;
