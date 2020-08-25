import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

const Button = ({ children, href }): JSX.Element => (
  // <button >{this.props.children}</button>
  <a className={styles.button} href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string.isRequired,
};

export default Button;
