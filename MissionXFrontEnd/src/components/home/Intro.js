import styles from "../styles/home/Intro.module.css";

export default function Intro({ setIsModalOpen, setIsSignUp, isLoggedIn }) {
  return (
    <div id={styles.introHome}>
      <div id={styles.introHomeHolder}>
        <div id={styles.introHomeTitle}>
          Prepare young minds for a better
          <span id={styles.specialWord}> future.</span>
        </div>
        <div id={styles.introHomeContent}>
          Let us help you advance students in Digital Technologies and other
          learning areas with our project-based learning programme.
        </div>
        <div id={styles.introHomeButtons}>
          <div className={styles.buttonHolder}>
            <button className={styles.buttonHome} id={styles.learn}>
              LEARN MORE
            </button>
          </div>
          <div className={styles.buttonHolder}>
            <button
              onClick={() => {
                if(!isLoggedIn)
                {setIsModalOpen(true);
                setIsSignUp(true);}
              }}
              className={styles.buttonHome}
              id={styles.SignUpButton}
            >
              SIGN UP
            </button>
          </div>
        </div>
        <div id={styles.TAndCHolder}>
          <div id={styles.TAndC}>
            *Basic subscription includes the first 15 projects free of charge.
          </div>
        </div>
      </div>
    </div>
  );
}
