import styles from "../styles/home/HomeSection3.module.css";

export default function TileCard({ image, alt }) {
  return (
    <div id={styles.tileCard}>
      <img id={styles.skillImage} src={image} alt={alt}></img>
    </div>
  );
}
