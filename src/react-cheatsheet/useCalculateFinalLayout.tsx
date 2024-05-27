import React, { useEffect, useState } from "react";

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
  cheatBoxes: React.ReactElement[]
) {
  const [finalLayout, setFinalLayout] = useState<React.ReactElement[][]>([]);

  useEffect(() => {
    if (!isMeasuringFinished) return;

    const columns: React.ReactElement[][] = [[], []]; // Example with 2 columns
    const columnHeights = [0, 0]; // Heights of the two columns

    cheatBoxesHeights.forEach((height, index) => {
      const columnIndex = columnHeights[0] <= columnHeights[1] ? 0 : 1;
      columns[columnIndex].push(cheatBoxes[index]);
      columnHeights[columnIndex] += height;
    });

    setFinalLayout(columns);
  }, [
    isMeasuringFinished,
    cheatBoxesHeights,
    cheatBoxes,
    setFinalLayout,
    containerHeight,
  ]);

  return finalLayout;
}
