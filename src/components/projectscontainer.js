// import classNames from "classnames";
import React from "react"
import classNames from "classnames";
import styles from "./projectscontainer.module.scss"

class ProjectsContainer extends React.Component {
  render() {
    const classes = classNames(
      styles.projectsContainer
    );
    return (
      <div className={classes}>
        <div className={styles.top}></div>
        <div className={styles.bottom}>
          <h3>404</h3>
          <p>Projects not found</p>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default ProjectsContainer
