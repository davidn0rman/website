import React from "react"
import Section from "../components/section"
import { Link } from "gatsby"

export default () => (
  <div>
    <Section
      sectionText="Welcome to my world."   
      name="hero-section" 
    >
      <Link to="/about/">About</Link>
    </Section>
    <Section
      sectionText="Welcome to my world."   
      name="80s-section" 
    />
  </div>
)