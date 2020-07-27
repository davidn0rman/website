import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import styles from "./styles/index.module.scss";
import ImageButton from "../components/imagebutton";
import BlogPreview from "../components/blogpreview";
import BlogPreviewContainer from "../components/blogpreviewcontainer";
import SubHeading from "../components/section/sub-heading";
// import Navigation from "../components/navigation/navigation"
import Section from "../components/section/section";
import SectionContent from "../components/section/section-content";
// import Button from "../components/button";
import ShapeContainer from "../components/shapes/shape-container";
// import ProjectsContainer from "../components/projectscontainer"

const Index = ({ data }) => {
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
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                slug
              }
            }
          }
        }
      }
      `}
      render={(data) => {
        const getNumberOfPosts =  4;
        const latestPosts = data.allMarkdownRemark.edges.slice(0, getNumberOfPosts)
        console.log(latestPosts)
        return (
          <>
            <Helmet>
              <html lang="en" />
              <title>{data.title}</title>
              <meta name="description" content={data.site.siteMetadata.description} />
            </Helmet>
            {/* <Navigation /> */}
            <Section sectionName="hero">
              <ShapeContainer />
              <SectionContent>
                <h1 className={styles.heroH1}>Hello! my name is {data.site.siteMetadata.shortname}</h1>
                <SubHeading text="I am a Front End Developer from" emoji="GB" />
              </SectionContent>
            </Section>
            <Section sectionName="about">
              <SectionContent>
                <h1 className={styles.aboutH1}>What do I do?!</h1>
                <p className={styles.aboutSubtext}>
                  &quot;Not a lot&quot; - <i>Mark Gaze, everyday.</i>
                </p>
                <div className={styles.gridContainer}>
                  <div className={styles.gridHeaderFrontend}>
                    <h2 className={styles.aboutH2}>Frontend</h2>
                  </div>
                  <div className={styles.gridIconFrontend}>
                    <img src="https://via.placeholder.com/100" alt="Frontend icon" />
                  </div>
                  <div className={styles.gridContentFrontend}>
                    <ul className={styles.gridList}>
                      <li>Wireframing</li>
                      <li>UI Design</li>
                      <li>User Research</li>
                      <li>Amet consectetur</li>
                    </ul>
                  </div>
                  <div className={styles.gridHeaderUx}><h2 className={styles.aboutH2}>UX</h2></div>
                  <div className={styles.gridIconUx}><img src="https://via.placeholder.com/100" alt="UX icon" /></div>
                  <div className={styles.gridContentUx}>
                    <ul className={styles.gridList}>
                      <li>Lorem ipsum</li>
                      <li>Dolar sit</li>
                      <li>Amet consectetur</li>
                      <li>Personas</li>
                    </ul>
                  </div>
                  <div className={styles.gridHeaderDad}><h2 className={styles.aboutH2}>Dad</h2></div>
                  <div className={styles.gridIconDad}><img src="https://via.placeholder.com/100" alt="Dad icon" /></div>
                  <div className={styles.gridContentDad}>
                    <ul className={styles.gridList}>
                      <li>Dolar sit</li>
                      <li>Personas</li>
                      <li>Amet consectetur</li>
                      <li>Lorem ipsum</li>
                    </ul>
                  </div>
                </div>
                {/* <Button href="https://twitter.com/davidn0rman">Read me tweets!</Button> */}
              </SectionContent>
            </Section>
            <Section sectionName="links">
              <div className={styles.linksContainer}>
                <ImageButton link="https://github.com/davidn0rman" size="32" icon="github" />
                <ImageButton link="https://github.com/davidn0rman" size="32" icon="twitter" />
              </div>
            </Section>
            {/* <Section sectionName="project">
              <SectionContent>
                <h1 className={styles.projectH1}>Projects</h1>
                <ProjectsContainer />
              </SectionContent>
            </Section> */}
            <Section sectionName="blog">
              <SectionContent>
                <h1 className={styles.blogH1}>Blog</h1>
                <p className={styles.aboutSubtext}>Probably a place that&apos;ll forever be empty. 👀</p>
                <BlogPreviewContainer>
                  {/* {data.allMarkdownRemark.edges.map(({ node }) => {
                    const title = node.frontmatter.title || node.frontmatter.slug
                      return (
                        <BlogPreview
                          key={node.frontmatter.slug}
                          slug={node.frontmatter.slug}
                          title={title}
                          date={node.frontmatter.date}
                          excerpt={node.excerpt}
                        />
                      )
                    }
                  )} */}
                  {latestPosts.map(({ node }) => {
                    const title = node.frontmatter.title || node.frontmatter.slug
                      return (
                        <BlogPreview
                          key={node.frontmatter.slug}
                          slug={node.frontmatter.slug}
                          title={title}
                          date={node.frontmatter.date}
                          excerpt={node.excerpt}
                        />
                      )
                    }
                  )}
                </BlogPreviewContainer>
              </SectionContent>
            </Section>
            <Section sectionName="footer">Footer</Section>
          </>
        )
      }}
    />
  )
};

export default Index;
