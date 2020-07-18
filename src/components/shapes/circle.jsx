// import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./circle.module.scss";

const Circle = ({
  bottom,
  colour,
  opacity,
  left,
  right,
  top,
  size,
}) => {
  const classes = classNames(
    styles.circle,
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
          width: `${size}rem`,
        }
      }
    />
  );
};

Circle.propTypes = {
  colour: PropTypes.string.isRequired,
  bottom: PropTypes.string,
  opacity: PropTypes.string.isRequired,
  left: PropTypes.string,
  right: PropTypes.string,
  top: PropTypes.string,
  size: PropTypes.string.isRequired,
};

Circle.defaultProps = {
  bottom: "",
  left: "",
  right: "",
  top: "",
};

export default Circle;
