import styles from "../styles/home/HomeSection3.module.css";
import TileCard from "./TileCard";
import image1 from "../../assets/images/home/Group1.png";
import image2 from "../../assets/images/home/Group2.png";
import image3 from "../../assets/images/home/Group3.png";
import image4 from "../../assets/images/home/Group4.png";

export default function HomeSection3() {
  return (
    <div id={styles.sectionThree}>
      <div id={styles.sectionThreeTitle}>
        Teaching kids programming and digital skills is <i>MORE</i> than just
        writing code.
      </div>
      <div id={styles.tileCardHolder}>
        <TileCard image={image1} />
        <TileCard image={image2} />
        <TileCard image={image3} />
        <TileCard image={image4} />
      </div>
    </div>
  );
}
