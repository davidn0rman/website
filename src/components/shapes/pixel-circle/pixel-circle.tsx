// import classNames from "classnames";
import React, { FC } from "react";
import classNames from "classnames";
import styles from "./pixel-circle.module.scss";

export interface IPixelCircleProps {
  classes?: string;
  colour?: string;
  left: number;
  opacity?: number;
  size: number;
  top: number;
}

const PixelCircle: FC<IPixelCircleProps> = (
  props: IPixelCircleProps
): JSX.Element => {
  const { classes, colour, top, left, opacity, size } = props;

  const colourClasses = classNames(
    styles.white,
    `${colour === "red" ? styles.red : ""}`,
    `${colour === "green" ? styles.green : ""}`,
    `${colour === "blue" ? styles.blue : ""}`
  );

  const containerPosition: React.CSSProperties = {
    height: `${size}rem`,
    left: `${left}%`,
    opacity: opacity,
    position: "absolute",
    top: `${top}%`,
    width: `${size}rem`,
  };

  // TODO: Logic. If the size is > 20 or something, return a different circle that's got
  //       _way more_ squares on, so it doesn't look so pixelated.

  if (size <= 2) {
    return (
      <div className={classes} style={containerPosition}>
        <div className={`${styles.sizeSmall11} ${colourClasses}`} />
        <div className={`${styles.sizeSmall21} ${colourClasses}`} />
        <div className={`${styles.sizeSmall31} ${colourClasses}`} />
        <div className={`${styles.sizeSmall32} ${colourClasses}`} />
        <div className={`${styles.sizeSmall41} ${colourClasses}`} />
      </div>
    );
  } else if (size >= 10) {
    return (
      <div className={classes} style={containerPosition}>
        <div className={`${styles.sizeLarge11} ${colourClasses}`} />
        <div className={`${styles.sizeLarge12} ${colourClasses}`} />
        <div className={`${styles.sizeLarge13} ${colourClasses}`} />
        <div className={`${styles.sizeLarge14} ${colourClasses}`} />
        <div className={`${styles.sizeLarge15} ${colourClasses}`} />
        <div className={`${styles.sizeLarge21} ${colourClasses}`} />
        <div className={`${styles.sizeLarge22} ${colourClasses}`} />
        <div className={`${styles.sizeLarge31} ${colourClasses}`} />
        <div className={`${styles.sizeLarge32} ${colourClasses}`} />
        <div className={`${styles.sizeLarge33} ${colourClasses}`} />
        <div className={`${styles.sizeLarge34} ${colourClasses}`} />
        <div className={`${styles.sizeLarge41} ${colourClasses}`} />
        <div className={`${styles.sizeLarge42} ${colourClasses}`} />
        <div className={`${styles.sizeLarge43} ${colourClasses}`} />
        <div className={`${styles.sizeLarge44} ${colourClasses}`} />
      </div>
    );
  }
  return (
    <div className={classes} style={containerPosition}>
      <div className={`${styles.sizeRegular11} ${colourClasses}`} />
      <div className={`${styles.sizeRegular12} ${colourClasses}`} />
      <div className={`${styles.sizeRegular13} ${colourClasses}`} />
      <div className={`${styles.sizeRegular21} ${colourClasses}`} />
      <div className={`${styles.sizeRegular22} ${colourClasses}`} />
      <div className={`${styles.sizeRegular31} ${colourClasses}`} />
      <div className={`${styles.sizeRegular32} ${colourClasses}`} />
      <div className={`${styles.sizeRegular41} ${colourClasses}`} />
      <div className={`${styles.sizeRegular42} ${colourClasses}`} />
      <div className={`${styles.sizeRegular43} ${colourClasses}`} />
    </div>
  );
};

export default PixelCircle;
