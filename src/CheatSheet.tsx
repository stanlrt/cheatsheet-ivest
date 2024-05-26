import styles from "./cheat-sheet.module.css";

type CheatBoxProps = {
  content?: React.ReactNode;
  pageBreak?: boolean;
};

export const CheatSheet = ({ boxes }: { boxes: CheatBoxProps[] }) => {
  return (
    <div className={styles.cheatSheet}>
      {boxes.map((box, index) => (
        <>
          {box.pageBreak ? (
            <div className={styles.pageBreak}></div>
          ) : (
            <CheatBox key={index} content={box.content} />
          )}
        </>
      ))}
    </div>
  );
};

const CheatBox = ({ content }: CheatBoxProps) => {
  return (
    <>
      <div className={styles.cheatBox}>{content}</div>
    </>
  );
};
