import { printFormats, type PrintFormat } from "./printFormatting";

type ColumnProps = {
  colIndex: number;
  printFormat: PrintFormat;
  columnCount: number;
  children: React.ReactNode;
};

export function Column({
  colIndex,
  printFormat,
  columnCount,
  children,
}: ColumnProps) {
  return (
    <div
      id={`column-${colIndex}`}
      key={colIndex}
      style={{
        display: "flex",
        flexDirection: "column",
        width: `calc(${printFormats[printFormat].width} / ${columnCount})`,
      }}
    >
      {children}
    </div>
  );
}
