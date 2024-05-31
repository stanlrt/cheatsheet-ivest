import "katex/dist/katex.min.css";
import ReactLatex from "react-latex-next";
import type { LatexProps } from "react-latex-next/dist/Latex";

export function MathLatex({
  children,
  ...props
}: Omit<LatexProps, "children"> & { children: string }) {
  return (
    <div style={{ fontSize: "6px", width: "fit-content", display: "inline" }}>
      <ReactLatex {...props}>{`$${children}$`}</ReactLatex>
    </div>
  );
}
