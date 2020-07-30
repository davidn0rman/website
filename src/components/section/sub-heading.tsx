// import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import styles from "./sub-heading.module.scss";

const SubHeading = ({ text, emoji }): JSX.Element => (
  <p
    className={styles.subHeading}
  >
    {text} {emoji === "GB"
      ? <span role="img" aria-label="Great Britain">🇬🇧</span>
      : ""}
  </p>
);

SubHeading.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

SubHeading.defaultProps = {
  text: "",
  emoji: "GB",
};

export default SubHeading;
