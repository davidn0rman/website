// import classNames from "classnames";
import React from "react"
import styles from "./about-section.module.scss"

class AboutSection extends React.Component {
  render() {
    // const classes = classNames(
    //   styles.section,
    //   this.props.isHero ? `${styles.sectionHero}` : ``,
    // );
  
    return (
      <section 
        className={styles.section}
        id={this.props.id}
        name={this.props.name}
      >
        {this.props.children}
      </section>
    )
  }
}

export default AboutSection
