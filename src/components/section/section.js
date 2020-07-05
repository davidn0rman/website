// import classNames from "classnames";
import React from "react"
import classNames from "classnames";
import styles from "./section.module.scss"

function Section(props) {
  const classes = classNames(
    styles.section,
    props.sectionName === "hero" ? `${styles.heroSection}` : ``,
    props.sectionName === "about" ? `${styles.aboutSection}` : ``,
    props.sectionName === "comingsoon" ? `${styles.comingsoonSection}` : ``,
    props.sectionName === "links" ? `${styles.linksSection}` : ``,
    props.sectionName === "project" ? `${styles.projectSection}` : ``,
    props.sectionName === "blog" ? `${styles.blogSection}` : ``,
    props.sectionName === "footer" ? `${styles.footerSection}` : ``,
  );

  return (
    <section className={classes}>
      {this.props.children}
    </section>
  )
}

export default Section
