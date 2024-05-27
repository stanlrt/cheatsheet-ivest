import { useEffect, useState } from "react";

/**
 * Calculate the final layout of the cheat boxes
 * @param cheatBoxesHeights - The heights of the cheat boxes
 * @param cheatBoxes - The cheat boxes
 * @param setLayout - The function to set the layout
 */
export function useCalculateFinalLayout(
  isMeasuringFinished: boolean,
  cheatBoxesHeights: number[],
  containerHeight: number,
  cheatBoxSpacing: number,
  columnCount: number,
  cheatBoxes: React.ReactElement[]
) {
  const [finalLayout, setFinalLayout] = useState<React.ReactElement[][][]>([]);

  useEffect(() => {
    if (!isMeasuringFinished) return;

    let currentPage = 0;
    let currentColumn = 0;
    let currentColumnContentHeight = 0;

    const calculatedLayout: React.ReactElement[][][] = [[]];

    cheatBoxes.forEach((cheatBox, index) => {
      const currentCheatBoxHeight = cheatBoxesHeights[index];
      currentColumnContentHeight += currentCheatBoxHeight;

      if (currentColumnContentHeight > containerHeight) {
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
  }, [
    isMeasuringFinished,
    cheatBoxesHeights,
    cheatBoxes,
    setFinalLayout,
    containerHeight,
    columnCount,
    cheatBoxSpacing,
  ]);

  return finalLayout;
}
