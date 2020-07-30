// import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import styles from "./hero-section.module.scss";

const HeroSection = ({ id, name }): JSX.Element => (
  // const classes = classNames(
  //   styles.section,
  //   this.props.isHero ? `${styles.sectionHero}` : ``,
  // );

  <section
    className={styles.heroSection}
    id={id}
    name={name}
  >
    <div className={styles.heroContent}>
      <p className={styles.heroTitle}>Hello! my name is David</p>
      <p className={styles.heroSubtitle}>
        I am a UX Designer and budding Front End Developer from{" "}
        <span role="img" aria-label="Great Britain">
          🇬🇧
        </span>
      </p>
    </div>
  </section>
);

HeroSection.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default HeroSection;
