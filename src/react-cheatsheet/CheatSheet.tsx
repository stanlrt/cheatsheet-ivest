import { Fragment, useCallback, useRef, type ReactNode } from "react";
import { Column } from "./Column";
import { Page } from "./Page";
import { PrintFormat } from "./printFormatting";
import { useCalculateFinalLayout } from "./useCalculateFinalLayout";
import { useMeasureHeights } from "./useMeasureHeights";

type CheatSheetProps = {
  /**
   * The cheat boxes to be laid out in the columns, in a top-bottom left-right manner.
   */
  content: ReactNode[];
  /**
   * The number of columns. Defaults to 3.
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
  /**
   * The delay in milliseconds to wait for the heights of the cheat boxes to be measured. Defaults to 100.
   *
   * Increase it if the final layout is inconsistent or incorrect. This is due to the time the DOM nodes take to paint during the measurement rendering.
   */
  measurementDelay?: number;
  /**
   * The title of the cheat sheet. Defaults to "My Cheatsheet".
   */
  title?: string;
};

/**
 * A print-ready cheat sheet component that takes in a list of cheat boxes and a column count,
 * and returns pages containing columns, where the cheatboxes are placed top-bottom, left-right, as to not overflow.
 *
 * @param cheatBoxes        The cheat boxes to be laid out in the columns, in a top-bottom left-right manner.
 * @param columnCount       Optional. The number of columns. Defaults to 3.
 * @param columnSpacing     Optional. The spacing between the columns in pixels. Defaults to 10px.
 * @param cheatBoxSpacing   Optional. The spacing between the cheat boxes in pixels. Defaults to 10px.
 * @param printFormat       Optional. The print format to be used in the layout. Defaults to A4.
 * @param showPageNumber    Optional. Whether to show the page number in the top right corner of each page. Defaults to false.
 * @param measurementDelay  Optional. The delay in milliseconds to wait for the heights of the cheat boxes to be measured. Defaults to 100.
 * @param title             Optional. The title of the cheat sheet. Defaults to "My Cheatsheet".
 */
export function CheatSheet({
  content,
  columnCount = 3,
  columnSpacing = 10,
  cheatBoxSpacing = 10,
  printFormat = PrintFormat.A4,
  showPageNumber = false,
  measurementDelay = 500,
  title = "My Cheatsheet",
}: CheatSheetProps) {
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);
  document.title = title;

  const { measurementLayout, measurement } = useMeasureHeights({
    content,
    divRefs,
    printFormat,
    columnCount,
    measurementDelay,
  });

  const finalLayout = useCalculateFinalLayout(
    measurement,
    cheatBoxSpacing,
    columnCount,
    content
  );

  const renderItemAndSpacing = useCallback(
    (items: ReactNode, index: number, spacing?: number) => (
      <Fragment key={index}>
        {items}
        {spacing && <div style={{ height: spacing }} />}
      </Fragment>
    ),
    []
  );

  const renderColumn = useCallback(
    (
      column: ReactNode[],
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
        {column.map((cheatBox, index) =>
          renderItemAndSpacing(
            cheatBox,
            index,
            index !== column.length - 1 ? cheatBoxSpacing : undefined
          )
        )}
      </Column>
    ),
    [renderItemAndSpacing, cheatBoxSpacing]
  );

  const renderPage = useCallback(
    (page: ReactNode[][], pageIndex: number) => (
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
