import React from "react"
import styles from "./button.module.scss"

class Button extends React.Component {
  render() {
    return (
      // <button >{this.props.children}</button>
      <a className={styles.button} href="https://twitter.com/davidn0rman">{this.props.children}</a>
    )
  }
}

export default Button
