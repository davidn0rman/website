import React from 'react';
import sectionStyles from './section.modules.css';

export default props => (
  <section className={sectionStyles.section} id={props.id} name={props.name}>
    {props.sectionText}
  </section>
);
