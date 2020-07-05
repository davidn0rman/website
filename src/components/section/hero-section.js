// import classNames from "classnames";
import React from "react"
import styles from "./hero-section.module.scss"

const HeroSection = () => {
  // const classes = classNames(
  //   styles.section,
  //   this.props.isHero ? `${styles.sectionHero}` : ``,
  // );

  return (
    <section
      className={styles.heroSection}
      id={this.props.id}
      name={this.props.name}
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
  )
}

export default HeroSection
