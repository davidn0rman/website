// import classNames from "classnames";
import React from "react"
import classNames from "classnames";
import styles from "./circle.module.scss"

const Circle = () => {
  const classes = classNames(
    styles.circle,
    this.props.colour === "purple" ? `${styles.purple}` : ``,
    this.props.colour === "blue" ? `${styles.blue}` : ``,
  );

  return (
    <div
      className={classes}
      style={
        {
          bottom: this.props.bottom + '%',
          height: this.props.size + 'rem',
          left: this.props.left + '%',
          opacity: this.props.opacity,
          right: this.props.right + '%',
          top: this.props.top + '%',
          width: this.props.size + 'rem',
        }
      }>
    </div>
  )
}

export default Circle
