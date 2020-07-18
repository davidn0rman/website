// import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./section-content.module.scss";

const SectionContent = ({ children, horizontal }) => {
  const classes = classNames(
    styles.sectionContent,
    horizontal ? `${styles.sectionContentHorizontal}` : "",
    // this.props.className === "hero" ? `${styles.hero}` : ``
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

SectionContent.propTypes = {
  children: PropTypes.oneOfType(
    [
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ],
  ).isRequired,
  horizontal: PropTypes.bool,
};

SectionContent.defaultProps = {
  horizontal: false,
};

export default SectionContent;
