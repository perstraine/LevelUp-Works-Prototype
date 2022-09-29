import styles from "../styles/home/HomeSection2.module.css";

export default function CircleButton({ color, projectButtonClick, pos }) {
  return (
    <span className={styles.dot} style={{ backgroundColor: color, color: 'white' }} onClick={(e) =>projectButtonClick(e, pos)}></span>
  );
}
