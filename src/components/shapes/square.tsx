// import classNames from "classnames";
import React from "react";
import classNames from "classnames";
import styles from "./square.module.scss";

interface ISquareProps {
  bottom: string;
  colour: string;
  opacity: string;
  left: string;
  right: string;
  rotate: string;
  top: string;
  size: string;
}

const Square: React.FC<ISquareProps> = (props: ISquareProps): JSX.Element => {
  const {
    bottom,
    colour,
    opacity,
    left,
    right,
    rotate,
    top,
    size,
  } = props;
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

export default Square;
