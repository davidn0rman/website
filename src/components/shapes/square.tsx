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
}): JSX.Element => {
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
  colour: PropTypes.string,
  left: PropTypes.string,
  opacity: PropTypes.string,
  right: PropTypes.string,
  rotate: PropTypes.string,
  size: PropTypes.string,
  top: PropTypes.string,
};

Square.defaultProps = {
  bottom: "",
  colour: null,
  left: "",
  opacity: "1",
  right: "",
  rotate: "",
  size: "3",
  top: "",
};

export default Square;
