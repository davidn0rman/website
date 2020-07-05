// import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types"
import classNames from "classnames";
import styles from "./cross.module.scss";

const Cross = ({ bottom, colour }) => {
  const classes = classNames(
    styles.cross,
    colour === "purple" ? `${styles.purple}` : "",
    colour === "blue" ? `${styles.blue}` : "",
  );

  const newBottom = `${bottom%}`;

  return (
    <div
      className={classes}
      style={
        {
          bottom: newBottom,
          height: size + 'rem',
          left: left + '%',
          opacity: opacity,
          right: right + '%',
          top: top + '%',
          transform: 'rotate(' + rotate + 'deg)',
          width: size + 'rem'
        }
      }
    />
  );
};

Cross.propTypes = {
  bottom: PropTypes.string,
};

Cross.defaultProps = {
  bottom: "",
};

export default Cross;
