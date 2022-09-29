import styles from "../styles/home/HomeSection2.module.css";

export default function Tile({ image, tileName , projectButtonClick, pos}) {
  return (
    <div id={styles.tileHolder} onClick={(e)=>projectButtonClick(e,pos)}>
      <img id={styles.tileImage} src={image} alt="Frame" />
      <div id={styles.tileName}>{tileName}</div>
    </div>
  );
}
