import { forwardRef, type Ref } from "react";

import styles from "./cheat-sheet.module.css";

export type CheatBoxContent = {
  title?: string;
  content: React.ReactNode;
};

export type CheatBoxProps = {
  index: number;
  title?: string;
  children: React.ReactNode;
  marginBottom?: number;
};

export const CheatBox = forwardRef(
  (
    { index, children, marginBottom = 0, title = "" }: CheatBoxProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <div
        id={`cheat-box-${index}`}
        key={index}
        ref={ref}
        className={styles.cheatBox}
        style={{ marginBottom }}
      >
        {title && <div className={styles.title}>{title}</div>}
        {children}
      </div>
    );
  }
);
