import classNames from "classnames"
import React from "react"
import styles from "./comingsoon-footer.module.scss"

class ComingSoonSection extends React.Component {
  render() {
    const classes = classNames(styles.section, this.props.classes)

    return (
      <section className={classes} id={this.props.id} name={this.props.name}>
        <ul>
          <li>
            <a
              href="https://github.com/davidn0rman"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/davidn0rman"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </section>
    )
  }
}

export default ComingSoonSection
