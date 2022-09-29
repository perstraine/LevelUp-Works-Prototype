import styles from "../styles/LoadingStatus.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingCircle}></div>
    </div>
  );
}
