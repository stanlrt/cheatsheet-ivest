export enum PrintFormat {
  A4 = "A4",
}

type DimensionsInMillimeters = {
  width: number;
  height: number;
};

export const printFormats: Record<PrintFormat, DimensionsInMillimeters> = {
  [PrintFormat.A4]: {
    width: 210,
    height: 297,
  },
};
