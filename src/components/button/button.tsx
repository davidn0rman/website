import React, { FC, PropsWithChildren } from "react";
import styles from "./button.module.scss";

export interface IButtonProps {
  /**
   * The link location
   */
  href: string;
}

type Props = PropsWithChildren<IButtonProps>;

export const Button: FC<Props> = (props: Props): JSX.Element => {
  const {
    children,
    href,
  } = props;

  return (
    <a className={styles.button} href={href} target="_blank" rel="noreferrer">{children}</a>
  );
};
