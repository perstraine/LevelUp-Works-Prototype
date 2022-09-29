import styles from "../styles/HelpRequests/HelpRequests.module.css";

export default function MarkDone() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Help Requests</h1>
        <div className={styles.itemsRight}>
          <h2 className={styles.itemsTitle}>Relpy</h2>
          {/* onClick  function that refreshes the current page*/}
          <h2
            className={styles.itemsTitle}
            onClick={() => window.location.reload()}
          >
            Mark as Done
          </h2>
        </div>
      </div>
    </div>
  );
}
