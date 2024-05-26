import { forwardRef, type Ref } from "react";

export type CheatBoxProps = {
  content: React.ReactNode;
};

export const CheatBox = forwardRef(
  ({ content }: CheatBoxProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        style={{ margin: "10px", padding: "10px", border: "1px solid black" }}
      >
        {content}
      </div>
    );
  }
);
