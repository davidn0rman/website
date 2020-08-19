// import classNames from "classnames";
import React from "react";
import classNames from "classnames";
import styles from "./cross.module.scss";

interface ICrossProps {
  bottom: string;
  colour: string;
  opacity: string;
  left: string;
  right: string;
  top: string;
  size: string;
  rotate: string;
}

const Cross: React.FC<ICrossProps> = (props: ICrossProps): JSX.Element => {
  const { bottom, colour, opacity, left, right, top, size, rotate } = props;

  const classes = classNames(
    styles.cross,
    colour === "purple" ? `${styles.purple}` : "",
    colour === "blue" ? `${styles.blue}` : ""
  );

  return (
    <div
      className={classes}
      style={{
        bottom: `${bottom}%`,
        height: `${size}rem`,
        left: `${left}%`,
        opacity,
        right: `${right}%`,
        top: `${top}%`,
        transform: `rotate(${rotate}deg)`,
        width: `${size}rem`,
      }}
    />
  );
};

export default Cross;
