import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import styles from "./styles/index.module.scss";
// import ImageButton from "../components/button/imagebutton";
// import BlogPreview from "../components/blog/blogpreview";
// import BlogPreviewContainer from "../components/blog/blogpreviewcontainer";
import Section from "../components/section/section";
import SectionContent from "../components/section-content/section-content";
import ShapeContainer from "../components/shapes/shape-container/shape-container";

const Index = (): JSX.Element => {
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
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
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
        // const getNumberOfPosts = 4;
        // const latestPosts = data.allMarkdownRemark.edges.slice(
        //   0,
        //   getNumberOfPosts
        // );

        return (
          <div className={styles.indexContainer}>
            <Helmet>
              <html lang="en" />
              <title>{data.site.siteMetadata.title}</title>
              <meta
                name="description"
                content={data.site.siteMetadata.description}
              />
            </Helmet>
            <Section sectionName="hero">
              <SectionContent>
                <h1 className={styles.heroH1}>
                  Hello<span className={styles.heroH1Emphasis}>!</span> my name
                  is {data.site.siteMetadata.shortname}
                </h1>
                <p className={styles.heroPara}>
                  I am a Front End Developer from{" "}
                  <span role="img" aria-label="Great Britain">
                    🇬🇧
                  </span>
                </p>
              </SectionContent>
              <ShapeContainer />
            </Section>
            {/* <Section sectionName="about">
              <SectionContent>
                <h2 className={styles.aboutH2}>What do I do?!</h2>
                <p className={styles.sectionSubtext}>
                  &quot;Not a lot&quot; - <i>Mark Gaze, everyday.</i>
                </p>
                <div className={styles.gridContainer}>
                  <div className={styles.gridHeaderFrontend}>
                    <h3 className={styles.aboutH3}>Frontend</h3>
                  </div>
                  <div className={styles.gridIconFrontend}>
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Frontend icon"
                    />
                  </div>
                  <div className={styles.gridContentFrontend}>
                    <ul className={styles.gridList}>
                      <li>Javascript/TypeScript</li>
                      <li>SCSS</li>
                      <li>React</li>
                      <li>UI Design</li>
                    </ul>
                  </div>
                  <div className={styles.gridHeaderUx}>
                    <h3 className={styles.aboutH3}>UX</h3>
                  </div>
                  <div className={styles.gridIconUx}>
                    <img src="https://via.placeholder.com/100" alt="UX icon" />
                  </div>
                  <div className={styles.gridContentUx}>
                    <ul className={styles.gridList}>
                      <li>Wireframing/Prototypes</li>
                      <li>UI Design</li>
                      <li>User Research</li>
                      <li>Usability testing</li>
                    </ul>
                  </div>
                  <div className={styles.gridHeaderDad}>
                    <h3 className={styles.aboutH3}>Dad</h3>
                  </div>
                  <div className={styles.gridIconDad}>
                    <img src="https://via.placeholder.com/100" alt="Dad icon" />
                  </div>
                  <div className={styles.gridContentDad}>
                    <ul className={styles.gridList}>
                      <li>Nappy changing</li>
                      <li>Bedtime reader</li>
                      <li>Snot wiper</li>
                      <li>Cheif cuddler</li>
                    </ul>
                  </div>
                </div>
              </SectionContent>
            </Section>
            <Section sectionName="links">
              <div className={styles.linksContainer}>
                <ImageButton
                  link="https://github.com/davidn0rman"
                  size="32"
                  icon="github"
                />
                <ImageButton
                  link="https://twitter.com/davidn0rman"
                  size="32"
                  icon="twitter"
                />
              </div>
            </Section>
            <Section sectionName="blog">
              <SectionContent>
                <h2 className={styles.blogH2}>Blog</h2>
                <p className={styles.sectionSubtext}>
                  Probably a place that&apos;ll probably be forever empty.{" "}
                  <span role="img" aria-label="side eyes emoji">
                    👀
                  </span>
                </p>
                <BlogPreviewContainer>
                  {latestPosts.map(({ node }) => {
                    const title =
                      node.frontmatter.title || node.frontmatter.slug;
                    return (
                      <BlogPreview
                        key={node.frontmatter.slug}
                        slug={node.frontmatter.slug}
                        title={title}
                        date={node.frontmatter.date}
                        excerpt={node.excerpt}
                      />
                    );
                  })}
                </BlogPreviewContainer>
              </SectionContent>
            </Section>
            <Section sectionName="footer">
              <SectionContent>
                <p className={styles.footerText}>© David Norman 2020</p>
              </SectionContent>
            </Section> */}
          </div>
        );
      }}
    />
  );
};

export default Index;
