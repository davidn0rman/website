// import classNames from "classnames";
import React from "react"
import classNames from "classnames";
import styles from "./cross.module.scss"

class Cross extends React.Component {
  render() {
    const classes = classNames(
      styles.cross,
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
            transform: 'rotate(' + this.props.rotate + 'deg)',
            width: this.props.size + 'rem'
          }
        }>
      </div>
    )
  }
}

export default Cross

