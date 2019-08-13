import React from 'react';
import { Link } from 'gatsby';
import styles from './topbarlink.module.css';

export default props => (
  <Link className={styles.link} to="/about/">
    {props.text}
  </Link>
);
