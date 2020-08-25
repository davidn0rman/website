// import classNames from "classnames";
import React from "react";
import classNames from "classnames";
import styles from "./cross.module.scss";

interface ICrossProps {
  bottom?: string;
  colour?: string;
  left?: string;
  opacity?: string;
  right?: string;
  rotate?: string;
  size?: string;
  top?: string;
}

const Cross: React.FC<ICrossProps> = (props: ICrossProps): JSX.Element => {
  const { bottom, colour, opacity, left, right, top, size, rotate } = props;

  const classes = classNames(
    styles.cross,
    colour === "purple" ? `${styles.crossPurple}` : "",
    colour === "blue" ? `${styles.crossBlue}` : ""
  );

  return (
    <div
      className={classes}
      style={{
        bottom: `${bottom || null}%`,
        height: `${size || "3"}rem`,
        left: `${left || null}%`,
        opacity,
        right: `${right || null}%`,
        top: `${top || null}%`,
        transform: `rotate(${rotate || null}deg)`,
        width: `${size || "3"}rem`,
      }}
    />
  );
};

export default Cross;
