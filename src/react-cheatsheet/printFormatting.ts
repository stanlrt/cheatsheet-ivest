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
    width: "210mm",
    height: "297mm",
  },
};
