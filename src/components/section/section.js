// import classNames from "classnames";
import React from "react"
import classNames from "classnames";
import styles from "./section.module.scss"

class Section extends React.Component {
  render() {
    const classes = classNames(
      styles.section,
      this.props.sectionName === "hero" ? `${styles.heroSection}` : ``,
      this.props.sectionName === "about" ? `${styles.aboutSection}` : ``,
      this.props.sectionName === "comingsoon" ? `${styles.comingsoonSection}` : ``,
    );
 
    return (
      <section className={classes}>
        {this.props.children}
      </section>
    )
  }
}

export default Section
