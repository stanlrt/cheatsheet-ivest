import clsx from "clsx";
import styles from "./cheat-sheet.module.css";

export function CheatTitle({
  title,
  className = styles.theory,
  isInCheatbox = false,
}: {
  title: string;
  className?: string;
  isInCheatbox?: boolean;
}) {
  return (
    <div className={styles.title}>
      <div className={clsx(className, isInCheatbox && styles.isInCheatbox)}>
        {title}
      </div>
    </div>
  );
}
