// import classNames from "classnames";
import React from "react";
import styles from "./shape-container.module.scss";
import PixelCircle from "../pixel-circle/pixel-circle";
// import Cross from "../cross/cross";
// import Square from "../square/square";

const ShapeContainer = (): JSX.Element => (
  <div className={styles.shapeContainer}>
    {/* <Circle /> */}
    <PixelCircle colour="blue" left={5} top={5} size={1} />
    <PixelCircle colour="red" left={10} top={5} size={2} />
    <PixelCircle colour="green" left={15} top={5} size={3} />
    <PixelCircle colour="blue" left={20} top={5} size={4} />
    <PixelCircle colour="green" left={25} top={5} size={5} />
    <PixelCircle colour="red" left={30} top={5} size={6} />
    <PixelCircle colour="blue" left={35} top={5} size={7} />
    <PixelCircle colour="green" left={40} top={5} size={8} />
    <PixelCircle
      colour="red"
      left={45}
      top={5}
      size={9}
      classes={`${styles.bounce} ${styles.bounce9}`}
    />
    <PixelCircle
      left={60}
      top={5}
      size={20}
      opacity={0.2}
      classes={`${styles.bounce} ${styles.bounce20}`}
    />
    {/* <Circle colour="purple" left="20" opacity="0.66" />
    <Circle bottom="7" colour="blue" right="32" />
    <Circle colour="purple" left="36" top="12" />
    <Circle left="10" top="40" />
    <Circle left="50" opacity="0.66" top="18" />
    <Cross bottom="9" colour="blue" left="32" rotate="45" />
    <Cross colour="purple" right="15" rotate="45" top="37" />
    <Cross colour="purple" right="27" rotate="45" top="11" />
    <Cross bottom="13" right="8" rotate="32" />
    <Cross opacity="0.33" right="9" rotate="15" top="7" />
    <Cross left="22" opacity="0.33" rotate="60" top="14" />
    <Cross left="5" rotate="20" top="8" />
    <Square bottom="10" left="12" rotate="5" />
    <Square bottom="15" colour="blue" left="50" rotate="90" />
    <Square colour="purple" left="14" rotate="15" top="23" />
    <Square bottom="28" right="20" rotate="15" /> */}
  </div>
);

export default ShapeContainer;
