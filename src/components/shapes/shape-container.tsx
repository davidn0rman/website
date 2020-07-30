// import classNames from "classnames";
import React from "react";
import styles from "./shape-container.module.scss";
import Circle from "./circle";
import Cross from "./cross";
import Square from "./square";

const ShapeContainer = (): JSX.Element => (
  <div className={styles.shapeContainer}>
    <Circle colour="blue" left="18" bottom="27" />
    <Circle colour="blue" left="3" bottom="5" opacity="0.66" />
    <Circle colour="blue" right="32" bottom="7" />
    <Circle colour="purple" top="12" left="36" />
    <Circle left="10" top="40" />
    <Circle left="50" top="18" opacity="0.66" />
    <Cross colour="blue" left="32" bottom="9" rotate="45" />
    <Cross colour="purple" right="15" top="37" rotate="45" />
    <Cross colour="purple" right="27" top="11" rotate="45" />
    <Cross right="8" bottom="13" rotate="32" />
    <Cross right="9" top="7" rotate="15" opacity="0.33" />
    <Cross left="22" top="14" rotate="60" opacity="0.33" />
    <Cross left="5" top="8" rotate="20" />
    <Square left="12" bottom="10" rotate="5" />
    <Square colour="blue" left="50" bottom="15" rotate="25" />
    <Square colour="purple" left="14" top="23" rotate="15" />
    <Square right="20" bottom="28" rotate="15" />
  </div>
);

export default ShapeContainer;
