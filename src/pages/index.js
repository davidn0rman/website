import React from "react"
import Section from "../components/section"
import Navigation from "../components/navigation"
import { Link } from "gatsby"

export default () => (
  <div>
    <Navigation
      text="Hello"
    />
    <Section
      sectionText="Welcome to my world"   
      name="hero"
      isHero={true}
    >
      <Link to="/about/">About</Link>
    </Section>
    <Section
      sectionText="Welcome, to the rock"   
      name="sectiom" 
    />
  </div>
)