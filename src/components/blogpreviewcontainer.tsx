// import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import styles from "./blogpreviewcontainer.module.scss";

const BlogPreviewContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

BlogPreviewContainer.propTypes = {
  children: PropTypes.oneOfType(
    [
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ],
  ).isRequired,
};

export default BlogPreviewContainer;
