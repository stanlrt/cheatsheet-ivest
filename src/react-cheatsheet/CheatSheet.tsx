import { useCallback, useRef } from "react";
import { CheatBox } from "./CheatBox";
import { Column } from "./Column";
import { Page } from "./Page";
import { PrintFormat } from "./printFormatting";
import { useCalculateFinalLayout } from "./useCalculateFinalLayout";
import { useMeasureHeights } from "./useMeasureHeights";

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
export function CheatSheet({
  cheatBoxes,
  columnCount = 3,
  columnSpacing = 10,
  cheatBoxSpacing = 10,
  printFormat = PrintFormat.A4,
  showPageNumber = false,
}: CheatSheetProps) {
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { measurementLayout, measurement } = useMeasureHeights({
    cheatBoxes,
    divRefs,
    printFormat,
  });

  const finalLayout = useCalculateFinalLayout(
    measurement,
    cheatBoxSpacing,
    columnCount,
    cheatBoxes
  );

  const renderCheatBox = useCallback(
    (
      cheatBoxContent: React.ReactElement,
      index: number,
      cheatBoxSpacing: number
    ) => (
      <CheatBox index={index} marginBottom={cheatBoxSpacing}>
        {cheatBoxContent}
      </CheatBox>
    ),
    []
  );

  const renderColumn = useCallback(
    (
      column: React.ReactElement[],
      colIndex: number,
      printFormat: PrintFormat,
      columnCount: number
    ) => (
      <Column
        key={colIndex}
        colIndex={colIndex}
        printFormat={printFormat}
        columnCount={columnCount}
      >
        {column.map((cheatBoxContent, index) =>
          renderCheatBox(cheatBoxContent, index, cheatBoxSpacing)
        )}
      </Column>
    ),
    [renderCheatBox, cheatBoxSpacing]
  );

  const renderPage = useCallback(
    (page: React.ReactElement[][], pageIndex: number) => (
      <Page
        key={pageIndex}
        pageIndex={pageIndex}
        printFormat={printFormat}
        columnSpacing={columnSpacing}
        showPageBreak={pageIndex !== finalLayout.length - 1}
        showPageNumber={showPageNumber}
      >
        {page.map((column, colIndex) =>
          renderColumn(column, colIndex, printFormat, columnCount)
        )}
      </Page>
    ),
    [
      printFormat,
      columnSpacing,
      finalLayout.length,
      showPageNumber,
      renderColumn,
      columnCount,
    ]
  );

  return (
    <>
      {!measurement.isCompleted
        ? measurementLayout
        : finalLayout.map(renderPage)}
    </>
  );
}
