import React, { useEffect, useState } from "react";

type MeasureHeightsReturn = {
  /**
   * The temporrary layout to measure the heights of the cheat boxes
   */
  temporaryMeasuringLayout: React.ReactElement;
  /**
   * The heights of the cheat boxes
   */
  cheatBoxesHeights: number[];
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
}: {
  cheatBoxes: React.ReactElement[];
  divRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}): MeasureHeightsReturn {
  const [cheatBoxesHeights, setCheatBoxesHeights] = useState<number[]>([]);
  const [isMeasuringFinished, setIsMeasuringFinished] = useState(false);

  useEffect(() => {
    const measuredHeights = divRefs.current.map(
      (div) => div?.offsetHeight || 0
    );
    setCheatBoxesHeights(measuredHeights);
    setIsMeasuringFinished(true);
  }, [cheatBoxes, divRefs, setCheatBoxesHeights]);

  const temporaryMeasuringLayout = (
    <div style={{ visibility: "hidden", position: "absolute", top: 0 }}>
      {cheatBoxes.map((div, index) => (
        <div key={index} ref={(el) => (divRefs.current[index] = el)}>
          {div}
        </div>
      ))}
    </div>
  );

  return { temporaryMeasuringLayout, cheatBoxesHeights, isMeasuringFinished };
}
