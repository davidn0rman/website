import React from 'react';
import styles from './body.module.css';

export default props => (
  <div className={styles.selesction} id={props.id} name={props.name}>
    {props.text}
  </div>
);
