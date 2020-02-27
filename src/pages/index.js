import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import styles from "./styles/index.module.scss"
import SubHeading from "../components/section/sub-heading"
import Navigation from "../components/navigation/navigation"
import Section from "../components/section/section"
import SectionContent from "../components/section/section-content"
import Button from "../components/button"

class Index extends React.Component{
  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                shortname
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet>
              <html lang="en" />
              <title>{data.site.siteMetadata.title}</title>
              <meta name="description" content="Helmet application" />
            </Helmet>
            <Navigation />
            <Section sectionName="hero">
              <SectionContent>
                <h1 className={styles.heroH1}>Hello! my name is {data.site.siteMetadata.shortname}</h1>
                <SubHeading text="I am a UX Designer and budding Front End Developer from" emoji="GB"/>
              </SectionContent>
            </Section>
            <Section sectionName="about">
              <SectionContent>
                <h1 className={styles.aboutH1}>What do I do?!</h1>
                <div className={styles.gridContainer}>
                  <div className={styles.gridHeaderUx}><h2 className={styles.aboutH2}>UX</h2></div>
                  <div className={styles.gridIconUx}><img src="https://via.placeholder.com/100" alt="UX icon" /></div>
                  <div className={styles.gridContentUx}>
                    <ul className={styles.gridList}>
                      <li>Protoyping</li>
                      <li>Mockups</li>
                      <li>User research</li>
                      <li>Personas</li>
                    </ul>
                  </div>
                  <div className={styles.gridHeaderFrontend}><h2 className={styles.aboutH2}>Frontend</h2></div>
                  <div className={styles.gridIconFrontend}><img src="https://via.placeholder.com/100" alt="Frontend icon" /></div>
                  <div className={styles.gridContentFrontend}>
                    <ul className={styles.gridList}>
                      <li>HTML</li>
                      <li>CSS/SCSS</li>
                      <li>JavaScript/TypeScript</li>
                      <li>Webpack</li>
                      <li>Gulp</li>
                    </ul>
                  </div>
                  <div className={styles.gridHeaderDad}><h2 className={styles.aboutH2}>Dad</h2></div>
                  <div className={styles.gridIconDad}><img src="https://via.placeholder.com/100" alt="Dad icon" /></div>
                  <div className={styles.gridContentDad}>
                    <ul className={styles.gridList}>
                      <li>Chief giggle maker</li>
                      <li>Nappy changer</li>
                      <li>Sick target</li>
                      <li>Bank of dad</li>
                    </ul>
                  </div>
                </div>
                <Button>Read me tweets!</Button>
              </SectionContent>
            </Section>
            <Section sectionName="links">
              <div className={styles.linksContainer}>
                <a href="https://github.com/davidn0rman"><img src="https://via.placeholder.com/32" alt="GitHub" /></a>
                <a href="https://twitter.com/davidn0rman"><img src="https://via.placeholder.com/32" alt="Twitter" /></a>
                <a href="https://www.instagram.com/davidn0rman"><img src="https://via.placeholder.com/32" alt="Instagram" /></a>
              </div>
            </Section>
            <Section sectionName="footer"/>
          </>
        )}
      />
    )
  }
}

export default Index