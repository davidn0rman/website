import classNames from "classnames";
import React from "react"
import styles from "./section.module.scss"

class Section extends React.Component {
  render() {
    const classes = classNames(
      styles.section,
      this.props.isHero ? `${styles.sectionHero}` : ``,
    );
  
    return (
      <section 
        className={classes}
        id={this.props.id}
        name={this.props.name}
      >
        {this.props.sectionText}
      </section>
    )
  }
}

export default Section