import { useRef } from "react";
import { useCalculateFinalLayout } from "./useCalculateFinalLayout";
import { useMeasureHeights } from "./useMeasureHeights";

// Define the component
function CheatSheet({ cheatBoxes }: { cheatBoxes: React.ReactElement[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { temporaryMeasuringLayout, cheatBoxesHeights, isMeasuringFinished } =
    useMeasureHeights({
      cheatBoxes,
      divRefs,
    });
  const finalLayout = useCalculateFinalLayout(
    isMeasuringFinished,
    cheatBoxesHeights,
    cheatBoxes
  );

  return (
    <>
      {!isMeasuringFinished ? (
        temporaryMeasuringLayout
      ) : (
        <div ref={containerRef} style={{ display: "flex" }}>
          {finalLayout.map((column, colIndex) => (
            <div key={colIndex} style={{ flex: 1, margin: "0 10px" }}>
              {column.map((div, index) => (
                <div key={index}>{div}</div>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default CheatSheet;
