import { useEffect, useState, type ReactNode } from "react";
import type { HeightsMeasurement } from "./useMeasureHeights";

/**
 * Calculate the final layout of the cheat boxes
 * @param cheatBoxesHeights - The heights of the cheat boxes
 * @param cheatBoxes - The cheat boxes
 * @param setLayout - The function to set the layout
 */
export function useCalculateFinalLayout(
  measurement: HeightsMeasurement,
  cheatBoxSpacing: number,
  columnCount: number,
  cheatBoxes: ReactNode[]
) {
  const [finalLayout, setFinalLayout] = useState<ReactNode[][][]>([]);

  useEffect(() => {
    const { cheatBoxesHeights, pageHeight } = measurement;

    if (!measurement.isCompleted) return;

    let currentPage = 0;
    let currentColumn = 0;
    let currentColumnContentHeight = 0;

    const calculatedLayout: ReactNode[][][] = [[]];
    console.log("page height ", pageHeight);

    cheatBoxes.forEach((cheatBox, index) => {
      const currentCheatBoxHeight = cheatBoxesHeights[index];

      console.log("Height of cheatBox nr", index, "is ", currentCheatBoxHeight);

      currentColumnContentHeight += currentCheatBoxHeight;

      console.log("currentColumnContentHeight ", currentColumnContentHeight);

      if (currentColumnContentHeight > pageHeight) {
        currentColumnContentHeight = currentCheatBoxHeight;
        currentColumn++;
        if (currentColumn >= columnCount) {
          currentColumn = 0;
          currentPage++;
          if (!calculatedLayout[currentPage]) {
            calculatedLayout[currentPage] = [];
          }
        }
        if (!calculatedLayout[currentPage][currentColumn]) {
          calculatedLayout[currentPage][currentColumn] = [];
        }
      } else if (!calculatedLayout[currentPage][currentColumn]) {
        calculatedLayout[currentPage][currentColumn] = [];
      }

      calculatedLayout[currentPage][currentColumn].push(cheatBox);
      currentColumnContentHeight += cheatBoxSpacing;
    });

    setFinalLayout(calculatedLayout);
  }, [cheatBoxes, setFinalLayout, columnCount, cheatBoxSpacing, measurement]);

  return finalLayout;
}
