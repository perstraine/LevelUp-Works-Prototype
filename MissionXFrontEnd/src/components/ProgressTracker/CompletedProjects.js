import styles from "../styles/ProgressTracker/ProgressTracker.module.css";

export default function CompletedProjects({ completed, projectID }) {
  return (
    <div className={styles.progressContainerRight}>
      {Array.from({ length: 15 }, (_, i) => (
        <div
          className={styles.progressBtn}
          style={{
            backgroundColor:
              completed !== null && projectID === i + 1 ? "#99EDCC" : "white",
          }}
          key={i}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}
