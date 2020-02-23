import React from "react"
import styles from "./navigation.module.scss"

// export default props =>
//   <div className={styles.nav}>
//     {props.headerText}
//   </div>

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul className={styles.links}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
