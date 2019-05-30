import React from "react"
import { Link } from "gatsby"


export default () => (
  <div style={{ color: `purple` }}>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Link to="/contact/">Contact</Link>
    <Link to="/about/">About</Link> 
  </div>
)