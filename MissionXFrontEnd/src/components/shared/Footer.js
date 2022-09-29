import styles from '../styles/Footer.module.css';
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from './Fallback'
import { errorHandler } from './ErrorHandler'

export default function Footer() {
  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
    <div id={styles.footer}>
      <div id={styles.footerContentHolder}>
        <div className={styles.footerSection}>
          <div className={styles.footerTitle}>COMPANY</div>
          <div className={styles.footerContent}>
            About Us <br />
            Careers <br />
            Partners
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.footerTitle}>COURSES</div>
          <div className={styles.footerContent}>
            Register <br />
            Login <br />
            Projects <br />
            Teachers <br />
            Parents <br />
            Resources
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.footerTitle}>SUPPORT</div>
          <div className={styles.footerContent}>
            FAQs
            <br /> Helpdesk <br />
            Contact Us
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.footerTitle}>LEGAL</div>
          <div className={styles.footerContent}>
            Terms & Conditions
            <br /> Privacy Policy
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.footerContent} id={styles.special}>
            LevelUp Works
            <br />
            LevelUp Works is an Auckland-based enterprise dedicated to
            developing game-based learning software to help teachers in response
            to the New Zealand Digital Technologies & Hangarau Matihiko.
            <br /> alan@levelupworks.com <br />
            (021) 668 185
          </div>
        </div>
      </div>
      </div>
    </ErrorBoundary>
  );
}
