import { useEffect, useRef, useState, type ReactNode } from "react";
import { printFormats, type PrintFormat } from "./printFormatting";

export type HeightsMeasurement = {
  /**
   * The heights of the cheat boxes
   */
  contentItemsHeights: number[];
  /**
   * The height of the page
   */
  pageHeight: number;
  /**
   * Whether the measuring is finished
   */
  isCompleted: boolean;
};

type MeasureHeightsReturn = {
  /**
   * The temporrary layout to measure the heights of the cheat boxes
   */
  measurementLayout: React.ReactElement;
  /**
   * The measurement of the heights
   */
  measurement: HeightsMeasurement;
};

/**
 * Measure the heights of the cheat boxes by using a temporary layout
 * @param cheatBoxes - The cheat boxes to measure
 * @param divRefs - The refs to the cheat boxes
 */
export function useMeasureHeights({
  content,
  divRefs,
  printFormat,
  columnCount,
  measurementDelay,
}: {
  content: ReactNode[];
  divRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  printFormat: PrintFormat;
  columnCount: number;
  measurementDelay: number;
}): MeasureHeightsReturn {
  const pageRef = useRef<HTMLDivElement>(null);
  const [measurement, setMeasurement] = useState<HeightsMeasurement>({
    contentItemsHeights: [],
    pageHeight: 0,
    isCompleted: false,
  });

  useMeasurecontentItemsHeights(
    divRefs,
    setMeasurement,
    content,
    measurementDelay
  );
  useMeasurePageHeight(pageRef, setMeasurement, printFormat);

  const measurementLayout = (
    <div
      ref={pageRef}
      style={{
        visibility: "hidden",
        position: "absolute",
        top: 0,
        height: printFormats[printFormat].height,
        width: `calc(${printFormats[printFormat].width} / ${columnCount})`,
      }}
    >
      {content.map((contentItem, index) => (
        <div key={index} ref={(el) => (divRefs.current[index] = el)}>
          {contentItem}
        </div>
      ))}
    </div>
  );

  return {
    measurementLayout,
    measurement,
  };
}
function useMeasurePageHeight(
  pageRef: React.MutableRefObject<HTMLDivElement | null>,
  setMeasurement: React.Dispatch<React.SetStateAction<HeightsMeasurement>>,
  printFormat: PrintFormat
) {
  useEffect(() => {
    if (pageRef.current) {
      setMeasurement((state) => ({
        ...state,
        pageHeight: pageRef.current!.offsetHeight,
      }));
    }
  }, [printFormat, pageRef, setMeasurement]);
}

function useMeasurecontentItemsHeights(
  divRefs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  setMeasurement: React.Dispatch<React.SetStateAction<HeightsMeasurement>>,
  content: ReactNode[],
  measurementDelay: number
) {
  useEffect(() => {
    setTimeout(() => {
      const measuredHeights = divRefs.current.map(
        (div) => div?.offsetHeight || 0
      );
      setMeasurement((state) => ({
        ...state,
        contentItemsHeights: measuredHeights,
        isCompleted: true,
      }));
    }, measurementDelay);
  }, [content, divRefs, setMeasurement, measurementDelay]);
}
