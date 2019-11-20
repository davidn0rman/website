import React from "react"
import styles from "./navigation.module.scss"

// export default props => 
//   <div className={styles.nav}>
//     {props.headerText}
//   </div>


class Navigation extends React.Component {
  render() {
    return (
      <div className={styles.nav}>
        {this.props.text}
      </div>
    )
  }
}

export default Navigation