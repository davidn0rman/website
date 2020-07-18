// import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./square.module.scss";

const Square = ({
  bottom,
  colour,
  opacity,
  left,
  right,
  rotate,
  top,
  size,
}) => {
  const classes = classNames(
    styles.square,
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

Square.propTypes = {
  bottom: PropTypes.string,
  colour: PropTypes.string.isRequired,
  left: PropTypes.string,
  opacity: PropTypes.string.isRequired,
  right: PropTypes.string,
  rotate: PropTypes.string,
  size: PropTypes.string.isRequired,
  top: PropTypes.string,
};

Square.defaultProps = {
  bottom: "",
  left: "",
  right: "",
  rotate: "",
  top: "",
};

export default Square;
