
import { GraduationCap, Briefcase, LineChart } from 'lucide-react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.subtitle}>
          Dedicated to bridging the gap between academia and industry through comprehensive training
          and placement services.
        </p>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <GraduationCap className={styles.icon} />
            <h3 className={styles.cardTitle}>Quality Education</h3>
            <p className={styles.cardDescription}>
              Providing world-class education and training to prepare students for industry demands.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <Briefcase className={styles.icon} />
            <h3 className={styles.cardTitle}>Industry Connect</h3>
            <p className={styles.cardDescription}>
              Strong partnerships with leading companies ensuring excellent placement opportunities.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <LineChart className={styles.icon} />
            <h3 className={styles.cardTitle}>Career Growth</h3>
            <p className={styles.cardDescription}>
              Supporting students in their professional development and career advancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
