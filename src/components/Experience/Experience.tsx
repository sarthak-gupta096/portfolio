import styles from './Experience.module.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Summer Intern',
      company: 'Vicharanashala (Lab for Education Design), IIT Ropar',
      date: 'Summer 2026 – Present',
      description: [
        'Active contributor on live, open-source repositories designed to tackle consequential, India-centric problems.',
        'Working on real-world codebases, pushing technical boundaries through impactful open-source software contributions.',
        'Collaborating with research teams under Prof. Sudarshan Iyengar to build scalable education design solutions.'
      ],
      link: 'https://www.linkedin.com/posts/sarthak-gupta-4b5b1921b_summerinternship-opensource-softwaredevelopment-share-7462004854752829440-48Uj/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeERIkBiK7jrFjVZxXIqIJfkcEsD8jiFgA'
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <h2 className="section-title">Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.roleInfo}>
                <h3>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>
              </div>
              <div className={styles.dateInfo}>
                <p className={styles.date}>{exp.date}</p>
                {exp.link && (
                  <a href={exp.link} target="_blank" rel="noreferrer" className={styles.link} aria-label="LinkedIn Post">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <ul className={styles.description}>
              {exp.description.map((item, iIndex) => (
                <li key={iIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
