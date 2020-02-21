// import classNames from "classnames";
import React from "react"
import classNames from "classnames";
import styles from "./heading.module.scss"

class Heading extends React.Component {
  render() {
    const classes = classNames(
      styles.heading,
      this.props.headingType === "about" ? `${styles.headingAbout}` : ``,
    );
    return (
      <p className={classes}>{this.props.text}</p>
    )
  }
}

export default Heading

