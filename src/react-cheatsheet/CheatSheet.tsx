import { Fragment, useRef } from "react";
import { useCalculateFinalLayout } from "./useCalculateFinalLayout";
import { useMeasureHeights } from "./useMeasureHeights";
import { PrintFormat, printFormats, type CSSLength } from "./printFormatting";

import styles from "./cheat-sheet.module.css";

type CheatSheetProps = {
  /**
   * The cheat boxes to be placed in the sheet, top-bottom, left-right, as to not overflow.
   */
  cheatBoxes: React.ReactElement[];
  /**
   * The number of columns to be used in the layout. Defaults to 3.
   */
  columnCount?: number;

  columnSpacing?: number;
  /**
   * The spacing between the cheat boxes. Defaults to 10px.
   */
  cheatBoxSpacing?: number;
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
  columnSpacing = 10,
  cheatBoxSpacing = 10,
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
    cheatBoxSpacing,
    columnCount,
    cheatBoxes
  );

  return (
    <>
      {!isMeasuringFinished
        ? temporaryMeasuringLayout
        : finalLayout.map((page, pageIndex) => (
            <Fragment key={pageIndex}>
              <div
                key={pageIndex}
                id={`page-${pageIndex}`}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: printFormats[printFormat].height,
                  width: printFormats[printFormat].width,
                  gap: columnSpacing,
                }}
              >
                {page.map((column, colIndex) => (
                  <div
                    id={`column-${colIndex}`}
                    key={colIndex}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: `calc(${printFormats[printFormat].width} / ${columnCount})`,
                    }}
                  >
                    {column.map((cheatBox, index) => (
                      <div
                        id={`cheat-box-${index}`}
                        key={index}
                        style={{ marginBottom: cheatBoxSpacing }}
                      >
                        {cheatBox}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className={styles.pageBreak} />
            </Fragment>
          ))}
    </>
  );
}

export default CheatSheet;
