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

  const crossSize: string = size || "3";

  return (
    <div
      className={classes}
      style={{
        bottom: `${bottom}%`,
        height: `${crossSize}rem`,
        left: `${left}%`,
        opacity,
        right: `${right}%`,
        top: `${top}%`,
        transform: `rotate(${rotate}deg)`,
        width: `${crossSize}rem`,
      }}
    />
  );
};

export default Cross;
