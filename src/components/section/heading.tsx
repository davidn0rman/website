// import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./heading.module.scss";

const Heading = ({ heading, text }): JSX.Element => {
  const classes = classNames(
    styles.heading,
    // this.props.heading === "H1" ? `${styles.h1}` : ``,
    heading === "H1" ? `${styles.h1}` : "",
    heading === "H2" ? `${styles.h2}` : "",
    heading === "H3" ? `${styles.h3}` : "",
    heading === "H4" ? `${styles.h4}` : "",
    heading === "H5" ? `${styles.h5}` : "",
  );
  return (
    <p className={classes}>{text}</p>
  );
};

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Heading;
