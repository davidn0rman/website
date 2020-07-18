import React from "react";
// import classNames from "classnames"
import styles from "./navigation.module.scss";

const Navigation = () => (
  <nav className={styles.navigation}>
    <ul className={styles.navLinks}>
      <li>
        <a className={styles.navLink} href="#home">Home</a>
      </li>
      <li>
        <a className={styles.navLink} href="#about">About</a>
      </li>
      <li>
        <a className={styles.navLink} href="#projects">Projects</a>
      </li>
      <li>
        <a className={styles.navLink} href="#blog">Blog</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
