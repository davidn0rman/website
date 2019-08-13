import React from 'react';
import styles from './brand.module.css';

export default props => (
  <div className={styles.brand} id={props.id} title={props.title}>
    {props.text}
  </div>
);
