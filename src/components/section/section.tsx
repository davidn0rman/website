// import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./section.module.scss";

const Section = ({ children, sectionName }): JSX.Element => {
  const classes = classNames(
    styles.section,
    sectionName === "hero" ? `${styles.heroSection}` : "",
    sectionName === "about" ? `${styles.aboutSection}` : "",
    sectionName === "comingsoon" ? `${styles.comingsoonSection}` : "",
    sectionName === "links" ? `${styles.linksSection}` : "",
    sectionName === "project" ? `${styles.projectSection}` : "",
    sectionName === "blog" ? `${styles.blogSection}` : "",
    sectionName === "footer" ? `${styles.footerSection}` : "",
  );

  return (
    <section className={classes}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.oneOfType(
    [
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ],
  ).isRequired,
  sectionName: PropTypes.string.isRequired,
};

export default Section;
