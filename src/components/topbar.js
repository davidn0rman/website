import React from 'react';
import topbarStyles from './topbar.module.css';

export default ({ children }) => (
  <div className={topbarStyles.topbar}>{children}</div>
);
