// import classNames from "classnames";
import React from "react";
import classNames from "classnames";
import styles from "./section.module.scss";

interface ISectionProps {
  sectionName: string;
}

type Props = React.PropsWithChildren<ISectionProps>;

const Section: React.FC<Props> = (props: Props): JSX.Element => {
  const {
    children,
    sectionName,
  } = props;

  const classes = classNames(
    styles.section,
    sectionName === "hero" ? `${styles.heroSection}` : "",
    sectionName === "about" ? `${styles.aboutSection}` : "",
    sectionName === "links" ? `${styles.linksSection}` : "",
    sectionName === "blog" ? `${styles.blogSection}` : "",
    sectionName === "footer" ? `${styles.footerSection}` : "",
  );

  return (
    <section className={classes}>
      {children}
    </section>
  );
};

export default Section;
