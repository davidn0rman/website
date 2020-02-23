// import classNames from "classnames";
import React from "react"
import styles from "./section-content.module.scss"

class SectionContent extends React.Component {
  render() {
    return (
      <div className={styles.sectionContent}>
        {this.props.children}
      </div>
    )
  }
}

export default SectionContent
