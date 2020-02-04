import classNames from "classnames";
import React from "react"
import styles from "./comingsoon.module.scss"

class ComingSoonSection extends React.Component {
  render() {
    const classes = classNames(
      styles.section,
      this.props.classes,
    );
  
    return (
      <section 
        className={classes}
        id={this.props.id}
        name={this.props.name}
      >
        <div className={styles.innerSection}>
          <h1>{this.props.title}</h1>
        </div>
      </section>
    )
  }
}

export default ComingSoonSection
