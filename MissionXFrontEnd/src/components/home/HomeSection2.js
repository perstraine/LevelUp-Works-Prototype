import styles from "../styles/home/HomeSection2.module.css";
import Tile from "./Tile";
import frame from '../../assets/images/home/Frame_Copy.png'
import joystick from "../../assets/images/home/Joystick.png";
import robot from "../../assets/images/home/Robot.png";
import augment from "../../assets/images/home/Augmented-reality.png";
import { useState } from "react";
import project1 from "../../assets/images/home/Projects1.png";
import project2 from "../../assets/images/home/Projects2.png";
import project3 from "../../assets/images/home/Projects3.png";
import project4 from "../../assets/images/home/Projects4.png";
import CircleButton from './CircleButton'

export default function HomeSection2() {
  const projects = [project1, project2, project3, project4];
  const [projectIndex, setprojectIndex] = useState(0);

  function projectButtonClick(e, pos) {
    setprojectIndex(pos)
  }

  return (
    <div id={styles.sectionTwo}>
      <div id={styles.sectionTwoLeft}>
        <div id={styles.sectionTwoMainTitle}>What we offer</div>
        <div id={styles.sectionTwoDesc}>
          The Creative Problem Solving programme is series of digital creation
          projects aimed to encourage self-motivation and student agency,
          designed by New Zealand's leading IT industry experts and schools.
        </div>
        <div id={styles.sectionTwoSubTitle}>What will students create?</div>
        <div id={styles.tiles}>
          <Tile
            image={frame}
            tileName={"ANIMATION"}
            projectButtonClick={projectButtonClick}
            pos={0}
          />
          <Tile
            image={joystick}
            tileName={"GAMES"}
            projectButtonClick={projectButtonClick}
            pos={1}
          />
          <Tile
            image={robot}
            tileName={"CHATBOTS"}
            projectButtonClick={projectButtonClick}
            pos={2}
          />
          <Tile
            image={augment}
            tileName={"AUGMENTED REALITY"}
            projectButtonClick={projectButtonClick}
            pos={3}
          />
        </div>
      </div>
      <div id={styles.sectionTwoRight}>
        <img
          id={styles.projectImage}
          src={projects[projectIndex]}
          alt="Project"
        />
        <div id={styles.buttons}>
          <CircleButton
            color={projectIndex === 0 ? "#707070" : "white"}
            projectButtonClick={projectButtonClick}
            pos={0}
          />
          <CircleButton
            color={projectIndex === 1 ? "#707070" : "white"}
            projectButtonClick={projectButtonClick}
            pos={1}
          />
          <CircleButton
            color={projectIndex === 2 ? "#707070" : "white"}
            projectButtonClick={projectButtonClick}
            pos={2}
          />
          <CircleButton
            color={projectIndex === 3 ? "#707070" : "white"}
            projectButtonClick={projectButtonClick}
            pos={3}
          />
        </div>
      </div>
    </div>
  );
}
