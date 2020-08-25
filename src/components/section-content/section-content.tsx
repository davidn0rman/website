// import classNames from "classnames";
import React from "react";
import classNames from "classnames";
import styles from "./section-content.module.scss";

interface ISectionContentProps {
  horizontal?: boolean;
}

type Props = React.PropsWithChildren<ISectionContentProps>;

const SectionContent: React.FC<Props> = (props: Props): JSX.Element => {
  const {
    children,
    horizontal,
  } = props;

  const classes = classNames(
    styles.sectionContent,
    horizontal ? `${styles.sectionContentHorizontal}` : "",
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default SectionContent;
