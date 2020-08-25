// import classNames from "classnames";
import React from "react";
import classNames from "classnames";
import styles from "./square.module.scss";

interface ISquareProps {
  bottom?: string;
  colour?: string;
  left?: string;
  opacity?: string;
  right?: string;
  rotate?: string;
  size?: string;
  top?: string;
}

const Square: React.FC<ISquareProps> = (props: ISquareProps): JSX.Element => {
  const { bottom, colour, opacity, left, right, rotate, top, size } = props;

  const randomNumber: number = Math.floor(Math.random() * (0 - 5) + 5);

  const classes: string = classNames(
    styles.square,
    colour === "purple" ? `${styles.squarePurple}` : "",
    colour === "blue" ? `${styles.squareBlue}` : "",
    randomNumber === 1 ? `${styles.animationDelay1}` : "",
    randomNumber === 2 ? `${styles.animationDelay2}` : "",
    randomNumber === 3 ? `${styles.animationDelay3}` : "",
    randomNumber === 4 ? `${styles.animationDelay4}` : ""
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

export default Square;
