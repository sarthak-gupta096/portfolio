import styles from './About.module.css';
import profileImg from '../../assets/profile.png';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className="section-title">About Me</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            I am a Data Science student at IIT Madras with a focus on building high-performance, 
            data-centric machine learning models and interactive analytical tools. 
            Currently, I am a <strong>Summer Intern (2026) at Vicharanashala (Lab for Education Design), IIT Ropar</strong>, 
            contributing to open-source repositories designed to tackle consequential, India-centric problems.
          </p>
          <p>
            I have proven expertise in navigating extreme class imbalances and high-cardinality datasets, 
            including the processing of 1.8M+ rows for biometric analysis. 
            I specialize in the full data lifecycle: from engineering scalable ML pipelines 
            to designing interactive KPI dashboards.
          </p>
          <p>
            My background combines strong analytical skills with full-stack development experience, 
            allowing me to build end-to-side data products that are not only powerful but also accessible.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={profileImg} alt="Sarthak Gupta" className={styles.profileImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
