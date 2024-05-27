import "katex/dist/katex.min.css";
import ReactLatex from "react-latex-next";
import type { LatexProps } from "react-latex-next/dist/Latex";

export function Latex({ children, ...props }: LatexProps) {
  return <ReactLatex {...props}>{children}</ReactLatex>;
}
