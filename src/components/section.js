import React from "react"
import sectionStyles from "./section.modules.css"


export default props => 
  <section 
    className={sectionStyles.section}
    id={props.id}
    name={props.name}
  >
    {props.sectionText}
  </section>


// import React from "react"
// import containerStyles from "./container.module.css"

// export default ({ children }) => (
//   <div className={containerStyles.container}>{children}</div>
// )