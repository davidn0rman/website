import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import styles from "./styles/index.module.scss"
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
        <p className={styles.sectionContentTitle}>Hello! my name is {data.site.siteMetadata.shortname}</p>
        <p className={styles.sectionContentSubtitle}>I am a UX Designer and budding Front End Developer from <span role="img" aria-label="Great Britain">🇬🇧</span></p>
      </SectionContent>
    </Section>
    <Section sectionName="about">
      <SectionContent sectionName="about">
        <p className={styles.sectionContentTitleAbout}>About</p>
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
