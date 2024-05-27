import { useEffect, useRef, useState } from "react";
import { printFormats, type PrintFormat } from "./printFormatting";
import { CheatBox } from "./CheatBox";

type MeasureHeightsReturn = {
  /**
   * The temporrary layout to measure the heights of the cheat boxes
   */
  temporaryMeasuringLayout: React.ReactElement;
  /**
   * The heights of the cheat boxes
   */
  cheatBoxesHeights: number[];

  pageHeight: number;
  /**
   * Whether the measuring is finished
   */
  isMeasuringFinished: boolean;
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
  cheatBoxes: React.ReactElement[];
  divRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  printFormat: PrintFormat;
}): MeasureHeightsReturn {
  const pageRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState(0);
  const [cheatBoxesHeights, setCheatBoxesHeights] = useState<number[]>([]);
  const [isMeasuringFinished, setIsMeasuringFinished] = useState(false);

  useMeasureCheatBoxesHeights(
    divRefs,
    setCheatBoxesHeights,
    setIsMeasuringFinished,
    cheatBoxes
  );
  useMeasurePageHeight(pageRef, setPageHeight, printFormat);

  const temporaryMeasuringLayout = (
    <div
      ref={pageRef}
      style={{
        visibility: "hidden",
        position: "absolute",
        top: 0,
        height: printFormats[printFormat].height,
      }}
    >
      {cheatBoxes.map((cheatBoxContent, index) => (
        <CheatBox key={index} ref={(el) => (divRefs.current[index] = el)}>
          {cheatBoxContent}
        </CheatBox>
      ))}
    </div>
  );

  return {
    temporaryMeasuringLayout,
    cheatBoxesHeights,
    pageHeight,
    isMeasuringFinished,
  };
}
function useMeasurePageHeight(
  pageRef: React.MutableRefObject<HTMLDivElement | null>,
  setPageHeight: React.Dispatch<React.SetStateAction<number>>,
  printFormat: PrintFormat
) {
  useEffect(() => {
    if (pageRef.current) {
      setPageHeight(pageRef.current.offsetHeight);
    }
  }, [printFormat, pageRef, setPageHeight]);
}

function useMeasureCheatBoxesHeights(
  divRefs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  setCheatBoxesHeights: React.Dispatch<React.SetStateAction<number[]>>,
  setIsMeasuringFinished: React.Dispatch<React.SetStateAction<boolean>>,
  cheatBoxes: React.ReactElement[]
) {
  useEffect(() => {
    const measuredHeights = divRefs.current.map(
      (div) => div?.offsetHeight || 0
    );
    setCheatBoxesHeights(measuredHeights);
    setIsMeasuringFinished(true);
  }, [cheatBoxes, divRefs, setCheatBoxesHeights, setIsMeasuringFinished]);
}
