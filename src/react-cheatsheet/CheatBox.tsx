import { forwardRef, type Ref } from "react";

import styles from "./cheat-sheet.module.css";

export type CheatBoxContent = {
  title?: string;
  content: React.ReactNode;
};

export type CheatBoxProps = {
  title?: string;
  children: React.ReactNode;
  marginBottom?: number;
  style?: React.CSSProperties;
};

export const CheatBox = forwardRef(
  (
    { children, marginBottom = 0, title, style }: CheatBoxProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <div
        id={`cheat-box`}
        ref={ref}
        className={styles.cheatBox}
        style={{ marginBottom, ...style }}
      >
        {title && <div className={styles.title}>{title}</div>}
        {children}
      </div>
    );
  }
);
