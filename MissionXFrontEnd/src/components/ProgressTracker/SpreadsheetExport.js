import styles from "../styles/ProgressTracker/ProgressTracker.module.css";
import exportIcon from "../../assets/images/export.png";

export default function SpreadsheetExport() {
  return (
    <div>
      <div className={styles.exportContainer}>
        <h1 className={styles.title}>Beginner Course</h1>
        <div className={styles.exportRight}>
          <img src={exportIcon} alt="export-icon" />
          <h2 className={styles.exportTitle}>Export As Spreadsheet</h2>
        </div>
      </div>
    </div>
  );
}
