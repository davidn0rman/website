import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

const Button = ({ children }) => (
  // <button >{this.props.children}</button>
  <a className={styles.button} href="https://twitter.com/davidn0rman">{children}</a>
);

Button.propTypes = {
  children: PropTypes.oneOfType(
    [
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ],
  ).isRequired,
};

export default Button;
