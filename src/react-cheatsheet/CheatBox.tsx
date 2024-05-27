import { forwardRef, type Ref } from "react";

import styles from "./cheat-sheet.module.css";

export type CheatBoxProps = {
  key: number;
  children: React.ReactNode;
  marginBottom?: number;
};

export const CheatBox = forwardRef(
  (
    { key, children, marginBottom = 0 }: CheatBoxProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <div
        id={`cheat-box-${key}`}
        key={key}
        ref={ref}
        className={styles.cheatBox}
        style={{ marginBottom }}
      >
        {children}
      </div>
    );
  }
);
