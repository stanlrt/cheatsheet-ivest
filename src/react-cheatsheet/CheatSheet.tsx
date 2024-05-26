import { useRef } from "react";
import { useCalculateFinalLayout } from "./useCalculateFinalLayout";
import { useMeasureHeights } from "./useMeasureHeights";
import { PrintFormat } from "./printFormatting";

type CheatSheetProps = {
  /**
   * The cheat boxes to be placed in the sheet, top-bottom, left-right, as to not overflow.
   */
  cheatBoxes: React.ReactElement[];
  /**
   * The number of columns to be used in the layout. Defaults to 3.
   */
  columnCount?: number;
  /**
   * The print format to be used in the layout. Defaults to A4.
   */
  printFormat?: PrintFormat;
};

/**
 * A print-ready cheat sheet component that takes in a list of cheat boxes and a column count,
 * and returns pages containing columns, where the cheatboxes are placed top-bottom, left-right, as to not overflow.
 */
function CheatSheet({
  cheatBoxes,
  columnCount = 3,
  printFormat = PrintFormat.A4,
}: CheatSheetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { temporaryMeasuringLayout, cheatBoxesHeights, isMeasuringFinished } =
    useMeasureHeights({
      cheatBoxes,
      divRefs,
    });
  const finalLayout = useCalculateFinalLayout(
    isMeasuringFinished,
    cheatBoxesHeights,
    cheatBoxes
  );

  return (
    <>
      {!isMeasuringFinished ? (
        temporaryMeasuringLayout
      ) : (
        <div ref={containerRef} style={{ display: "flex" }}>
          {finalLayout.map((column, colIndex) => (
            <div key={colIndex} style={{ flex: 1, margin: "0 10px" }}>
              {column.map((div, index) => (
                <div key={index}>{div}</div>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default CheatSheet;
