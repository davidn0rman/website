// import classNames from "classnames";
import React from "react"
import styles from "./sub-heading.module.scss"

class SubHeading extends React.Component {
  render() {
    return (
      <p className={styles.subHeading}>{this.props.text} {this.props.emoji === "GB" ? <span role="img" aria-label="Great Britain">🇬🇧</span> : ""}</p>
    )
  }
}

export default SubHeading

