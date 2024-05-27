import { forwardRef, type Ref } from "react";

import styles from "./cheat-sheet.module.css";

export type CheatBoxProps = {
  index: number;
  children: React.ReactNode;
  marginBottom?: number;
};

export const CheatBox = forwardRef(
  (
    { index, children, marginBottom = 0 }: CheatBoxProps,
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
        {children}
      </div>
    );
  }
);
