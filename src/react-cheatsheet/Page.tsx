import { printFormats, type PrintFormat } from "./printFormatting";

import styles from "./cheat-sheet.module.css";
import { Fragment } from "react/jsx-runtime";

type PageProps = {
  pageIndex: number;
  printFormat: PrintFormat;
  columnSpacing: number;
  children: React.ReactNode;
  showPageNumber: boolean;
  showPageBreak: boolean;
};

export function Page({
  pageIndex,
  printFormat,
  columnSpacing,
  children,
  showPageNumber,
  showPageBreak,
}: PageProps) {
  return (
    <Fragment key={pageIndex}>
      {showPageNumber && (
        <div
          id={`page-counter-${pageIndex + 1}`}
          className={styles.printTopRight}
        >
          {pageIndex + 1}
        </div>
      )}
      <div
        key={pageIndex}
        id={`page-${pageIndex}`}
        className={styles.page}
        style={{
          height: printFormats[printFormat].height,
          width: printFormats[printFormat].width,
          gap: columnSpacing,
        }}
      >
        {children}
      </div>
      {showPageBreak ? <div className={styles.pageBreak} /> : null}
    </Fragment>
  );
}
