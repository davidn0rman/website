import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import styles from "./styles/index.module.scss"
import Heading from "../components/section/heading"
import SubHeading from "../components/section/sub-heading"
import Section from "../components/section/section"
import SectionContent from "../components/section/section-content"

// import { Link } from "gatsby"

export default ({ data }) => (
  <>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <Section sectionName="hero">
      <SectionContent>
        <h1 className={styles.heroH1}>Hello! my name is {data.site.siteMetadata.shortname}</h1>
        <SubHeading text="I am a UX Designer and budding Front End Developer from" emoji="GB"/>
      </SectionContent>
    </Section>
    <Section sectionName="about">
      <SectionContent>
        <Heading heading="H2" text="About" />
        <div className={styles.container}>
          <div className={styles.box}><Heading heading="H2" text="UX"/></div>
          <div className={styles.box}><Heading heading="H2" text="Frontend"/></div>
          <div className={styles.box}><Heading heading="H2" text="Dad"/></div>
        </div>
      </SectionContent>
    </Section>
    <Section sectionName="comingsoon"/>
  </>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        shortname
      }
    }
  }
`
