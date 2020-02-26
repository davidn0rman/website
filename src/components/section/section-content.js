// import classNames from "classnames";
import React from "react"
import classNames from "classnames"
import styles from "./section-content.module.scss"

class SectionContent extends React.Component {
  render() {
    const classes = classNames(
      styles.sectionContent,
      this.props.horizontal ? `${styles.sectionContentHorizontal}` : ``
    );
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}

export default SectionContent
