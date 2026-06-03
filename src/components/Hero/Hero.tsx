import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.name}>Sarthak Gupta</h1>
        <h2 className={styles.headline}>Data Scientist | Data Science Student</h2>
        <p className={styles.description}>
          I specialize in building high-performance, data-centric machine learning models and interactive analytical tools. 
          Currently a Data Science student at IIT Madras with a passion for turning complex data into actionable business intelligence.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.button}>View My Work</a>
          <a href="#contact" className={`${styles.button} ${styles.outline}`}>Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
