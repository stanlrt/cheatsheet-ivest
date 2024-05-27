import { useEffect, useRef, useState } from "react";
import { printFormats, type PrintFormat } from "./printFormatting";
import { CheatBox, type CheatBoxContent } from "./CheatBox";

export type HeightsMeasurement = {
  /**
   * The heights of the cheat boxes
   */
  cheatBoxesHeights: number[];
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
  cheatBoxes,
  divRefs,
  printFormat,
}: {
  cheatBoxes: CheatBoxContent[];
  divRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  printFormat: PrintFormat;
}): MeasureHeightsReturn {
  const pageRef = useRef<HTMLDivElement>(null);
  const [measurement, setMeasurement] = useState<HeightsMeasurement>({
    cheatBoxesHeights: [],
    pageHeight: 0,
    isCompleted: false,
  });

  useMeasureCheatBoxesHeights(divRefs, setMeasurement, cheatBoxes);
  useMeasurePageHeight(pageRef, setMeasurement, printFormat);

  const measurementLayout = (
    <div
      ref={pageRef}
      style={{
        visibility: "hidden",
        position: "absolute",
        top: 0,
        height: printFormats[printFormat].height,
      }}
    >
      {cheatBoxes.map((cheatBox, index) => (
        <CheatBox
          title={cheatBox.title}
          index={index}
          ref={(el) => (divRefs.current[index] = el)}
        >
          {cheatBox.content}
        </CheatBox>
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

function useMeasureCheatBoxesHeights(
  divRefs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  setMeasurement: React.Dispatch<React.SetStateAction<HeightsMeasurement>>,
  cheatBoxes: CheatBoxContent[]
) {
  useEffect(() => {
    const measuredHeights = divRefs.current.map(
      (div) => div?.offsetHeight || 0
    );
    setMeasurement((state) => ({
      ...state,
      cheatBoxesHeights: measuredHeights,
      isCompleted: true,
    }));
  }, [cheatBoxes, divRefs, setMeasurement]);
}
