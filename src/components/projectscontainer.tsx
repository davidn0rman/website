// import classNames from "classnames";
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./projectscontainer.module.scss";

const ProjectsContainer = ({ children }): JSX.Element => {
  const classes = classNames(
    styles.projectsContainer,
  );
  return (
    <div className={classes}>
      <div className={styles.top} />
      <div className={styles.bottom}>
        <h3>404</h3>
        <p>Projects not found</p>
      </div>
      {children}
    </div>
  );
};

ProjectsContainer.propTypes = {
  children: PropTypes.oneOfType(
    [
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ],
  ).isRequired,
};

export default ProjectsContainer;
