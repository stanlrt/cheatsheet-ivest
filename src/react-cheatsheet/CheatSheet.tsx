import { useRef } from "react";
import { useCalculateFinalLayout } from "./useCalculateFinalLayout";
import { useMeasureHeights } from "./useMeasureHeights";
import { PrintFormat, printFormats, type CSSLength } from "./printFormatting";

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
   * The spacing between the cheat boxes. Defaults to 10px.
   */
  cheatBoxSpacing?: CSSLength;
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
  cheatBoxSpacing = "10px",
  printFormat = PrintFormat.A4,
}: CheatSheetProps) {
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);

  const {
    temporaryMeasuringLayout,
    cheatBoxesHeights,
    containerHeight,
    isMeasuringFinished,
  } = useMeasureHeights({
    cheatBoxes,
    divRefs,
    printFormat,
  });
  const finalLayout = useCalculateFinalLayout(
    isMeasuringFinished,
    cheatBoxesHeights,
    containerHeight,
    cheatBoxes
  );

  return (
    <>
      {!isMeasuringFinished ? (
        temporaryMeasuringLayout
      ) : (
        <div
          id={`page-${printFormat}`}
          style={{
            display: "flex",
            flexDirection: "column",
            height: printFormats[printFormat].height,
            width: printFormats[printFormat].width,
          }}
        >
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
