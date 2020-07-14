// import classNames from "classnames";
import React from "react"
import classNames from "classnames";
import styles from "./heading.module.scss"

const Heading = ({ data }) => {
  const classes = classNames(
    styles.heading,
    // this.props.heading === "H1" ? `${styles.h1}` : ``,
    this.props.heading === "H1" ? `${styles.h1}` : ``,
    this.props.heading === "H2" ? `${styles.h2}` : ``,
    this.props.heading === "H3" ? `${styles.h3}` : ``,
    this.props.heading === "H4" ? `${styles.h4}` : ``,
    this.props.heading === "H5" ? `${styles.h5}` : ``,
  );
  return (
    <p className={classes}>{this.props.text}</p>
  )
}

export default Heading
