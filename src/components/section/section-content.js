// import classNames from "classnames";
import React from "react"
import classNames from "classnames"
import styles from "./section-content.module.scss"

const SectionContent = () => {
  const classes = classNames(
    styles.sectionContent,
    this.props.horizontal ? `${styles.sectionContentHorizontal}` : ``,
    // this.props.className === "hero" ? `${styles.hero}` : ``
  )

  return (
    <div className={classes}>
      {this.props.children}
    </div>
  )
}

export default SectionContent
