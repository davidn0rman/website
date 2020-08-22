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

  const circleSize: string = size || "3";

  return (
    <div
      className={classes}
      style={{
        bottom: `${bottom}%`,
        height: `${circleSize}rem`,
        left: `${left}%`,
        opacity,
        right: `${right}%`,
        top: `${top}%`,
        width: `${circleSize}rem`,
      }}
    />
  );
};

export default Circle;
