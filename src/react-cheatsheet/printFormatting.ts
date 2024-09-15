export enum PrintFormat {
  A4 = "A4",
}

export type CSSLength = `${number}${
  | "px"
  | "em"
  | "rem"
  | "%"
  | "vh"
  | "vw"
  | "cm"
  | "mm"
  | "in"
  | "pt"
  | "pc"}`;

type CSSDimensions = {
  width: CSSLength;
  height: CSSLength;
};

export const printFormats: Record<PrintFormat, CSSDimensions> = {
  [PrintFormat.A4]: {
    height: "210mm",
    width: "297mm",
  },
};
