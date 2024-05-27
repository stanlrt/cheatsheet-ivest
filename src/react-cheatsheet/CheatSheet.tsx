import { useRef } from "react";
import { CheatBox } from "./CheatBox";
import { PrintFormat } from "./printFormatting";
import { useCalculateFinalLayout } from "./useCalculateFinalLayout";
import { useMeasureHeights } from "./useMeasureHeights";

import { Column } from "./Column";
import { Page } from "./Page";

type CheatSheetProps = {
  /**
   * The cheat boxes to be placed in the sheet, top-bottom, left-right, as to not overflow.
   */
  cheatBoxes: React.ReactElement[];
  /**
   * The number of columns to be used in the layout in pixels. Defaults to 3.
   */
  columnCount?: number;
  /**
   * The spacing between the columns in pixels. Defaults to 10px.
   */
  columnSpacing?: number;
  /**
   * The spacing between the cheat boxes in pixels. Defaults to 10px.
   */
  cheatBoxSpacing?: number;
  /**
   * The print format to be used in the layout. Defaults to A4.
   */
  printFormat?: PrintFormat;
  /**
   * Whether to show the page number in the top right corner of each page. Defaults to false.
   */
  showPageNumber?: boolean;
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
  showPageNumber = false,
}: CheatSheetProps) {
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);

  const {
    temporaryMeasuringLayout,
    cheatBoxesHeights,
    pageHeight,
    isMeasuringFinished,
  } = useMeasureHeights({
    cheatBoxes,
    divRefs,
    printFormat,
  });

  const finalLayout = useCalculateFinalLayout(
    isMeasuringFinished,
    cheatBoxesHeights,
    pageHeight,
    cheatBoxSpacing,
    columnCount,
    cheatBoxes
  );

  let globalCheatboxCount = 0;

  return (
    <>
      {!isMeasuringFinished
        ? temporaryMeasuringLayout
        : finalLayout.map((page, pageIndex) => (
            <Page
              pageIndex={pageIndex}
              printFormat={printFormat}
              columnSpacing={columnSpacing}
              showPageBreak={pageIndex !== finalLayout.length - 1}
              showPageNumber={showPageNumber}
            >
              {page.map((column, colIndex) => (
                <Column
                  colIndex={colIndex}
                  printFormat={printFormat}
                  columnCount={columnCount}
                >
                  {column.map((cheatBoxContent) => {
                    globalCheatboxCount++;
                    return (
                      <CheatBox
                        key={globalCheatboxCount}
                        marginBottom={cheatBoxSpacing}
                      >
                        {cheatBoxContent}
                      </CheatBox>
                    );
                  })}
                </Column>
              ))}
            </Page>
          ))}
    </>
  );
}

export default CheatSheet;
