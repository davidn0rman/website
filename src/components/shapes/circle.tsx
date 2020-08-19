// import classNames from "classnames";
import React, { FC } from "react";
import classNames from "classnames";
import styles from "./circle.module.scss";

interface ICircleProps {
  bottom: string;
  colour: string;
  opacity: string;
  left: string;
  right: string;
  top: string;
  size: string;
}

const Circle: FC<ICircleProps> = (props: ICircleProps): JSX.Element => {
  const { bottom, colour, opacity, left, right, top, size } = props;

  const classes = classNames(
    styles.circle,
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
        width: `${size}rem`,
      }}
    />
  );
};

export default Circle;
