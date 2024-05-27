import React, { useEffect, useRef, useState } from "react";
import { printFormats, type PrintFormat } from "./printFormatting";

import styles from "./cheat-sheet.module.css";

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
 * Measure the heights of the cheat boxes after the initial render
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

  useEffect(() => {
    const measuredHeights = divRefs.current.map(
      (div) => div?.offsetHeight || 0
    );
    setCheatBoxesHeights(measuredHeights);
    setIsMeasuringFinished(true);
  }, [cheatBoxes, divRefs, setCheatBoxesHeights]);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, [printFormat, containerRef]);

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
      {cheatBoxes.map((div, index) => (
        <div
          className={styles.cheatBox}
          key={index}
          ref={(el) => (divRefs.current[index] = el)}
        >
          {div}
        </div>
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
