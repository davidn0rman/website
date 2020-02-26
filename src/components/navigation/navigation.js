import React from "react"
import classNames from "classnames"
import styles from "./navigation.module.scss"

// export default props =>
//   <div className={styles.nav}>
//     {props.headerText}
//   </div>

class Navigation extends React.Component {
  render() {
    const navClasses = classNames(
      this.props.isTop ? `${styles.navigationTop}` : `${styles.navigation}`
    );
    return (
      <nav className={navClasses}>
        <ul className={styles.navLinks}>
          <li>
            <a className={styles.navLink} href="#">Link</a>
          </li>
          <li>
            <a className={styles.navLink} href="#">Link</a>
          </li>
          <li>
            <a className={styles.navLink} href="#">Link</a>
          </li>
          <li>
            <a className={styles.navLink} href="#">Link</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
