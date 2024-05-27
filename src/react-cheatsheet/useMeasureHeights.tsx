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

  containerHeight: number;
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [cheatBoxesHeights, setCheatBoxesHeights] = useState<number[]>([]);
  const [isMeasuringFinished, setIsMeasuringFinished] = useState(false);

  useMeasureCheatBoxesHeights(
    divRefs,
    setCheatBoxesHeights,
    setIsMeasuringFinished,
    cheatBoxes
  );
  useMeasurePageHeight(containerRef, setContainerHeight, printFormat);

  const temporaryMeasuringLayout = (
    <div
      ref={containerRef}
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
    containerHeight,
    isMeasuringFinished,
  };
}
function useMeasurePageHeight(
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  setContainerHeight: React.Dispatch<React.SetStateAction<number>>,
  printFormat: PrintFormat
) {
  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, [printFormat, containerRef, setContainerHeight]);
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
