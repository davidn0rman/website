// import classNames from "classnames";
import React from "react";
import styles from "./shape-container.module.scss";
import Circle from "./circle";
import Cross from "./cross";
import Square from "./square";

const ShapeContainer = () => (
  <div className={styles.shapeContainer}>
    <Circle colour="blue" size="2" left="18" bottom="27" />
    <Circle colour="blue" size="2" left="3" bottom="5" opacity="0.66" />
    <Circle colour="blue" size="3" right="32" bottom="7" />
    <Circle colour="purple" size="2" top="12" left="36" />
    <Circle size="4" left="10" top="40" />
    <Circle size="4" left="50" top="18" opacity="0.66" />
    <Cross colour="blue" size="2" left="32" bottom="9" rotate="45" />
    <Cross colour="purple" size="2" right="15" top="37" rotate="45" />
    <Cross colour="purple" size="2" right="27" top="11" rotate="45" />
    <Cross size="2" right="8" bottom="13" rotate="32" />
    <Cross size="2" right="9" top="7" rotate="15" opacity="0.33" />
    <Cross size="5" left="22" top="14" rotate="60" opacity="0.33" />
    <Cross size="6" left="5" top="8" rotate="20" />
    <Square size="6" left="12" bottom="10" rotate="5" />
    <Square colour="blue" size="2" left="50" bottom="15" rotate="25" />
    <Square colour="purple" size="2" left="14" top="23" rotate="15" />
    <Square size="5" right="20" bottom="28" rotate="15" />
  </div>
);

export default ShapeContainer;
