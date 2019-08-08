import React from 'react';
import topbarStyles from './topbar.modules.css';

export default ({ children }) => (
  <div
    className={topbarStyles.topbar}
    // style={{
    //   margin: `3rem auto`,
    //   width: '100%',
    //   padding: `0 1rem`
    // }}
  >
    {children}
  </div>
);
