// import classNames from "classnames";
import React, { FC } from "react";
import classNames from "classnames";
import styles from "./circle.module.scss";

export interface ICircleProps {
  bottom?: string;
  colour?: string;
  left?: string;
  opacity?: string;
  right?: string;
  size?: string;
  top?: string;
}

const Circle: FC<ICircleProps> = (props: ICircleProps): JSX.Element => {
  const { bottom, colour, opacity, left, right, top, size } = props;

  const randomNumber: number = Math.floor(Math.random() * (0 - 5) + 5);
  console.log(randomNumber);

  const classes = classNames(
    styles.circle,
    colour === "purple" ? `${styles.circlePurple}` : "",
    colour === "blue" ? `${styles.circleBlue}` : "",
    randomNumber === 1 ? `${styles.animation1}` : "",
    randomNumber === 2 ? `${styles.animation2}` : "",
    randomNumber === 3 ? `${styles.animation3}` : "",
    randomNumber === 4 ? `${styles.animation4}` : ""
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
        width: `${size || "3"}rem`,
      }}
    />
  );
};

export default Circle;
