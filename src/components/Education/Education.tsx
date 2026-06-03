import styles from './Education.module.css';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'BS in Data Science and Applications',
      institution: 'IIT Madras (IITM)',
      date: 'Jan 2022 – Ongoing',
      description: 'Focusing on advanced machine learning, statistical analysis, and data engineering.'
    },
    {
      degree: 'B.Sc. Computer Science',
      institution: 'Dr. Ram Manohar Lohia Avadh University, Ayodhya',
      date: 'Sept 2021 – Sept 2024',
      description: 'Foundation in computer science principles and software development.'
    },
    {
      degree: 'Intermediate (Class XII)',
      institution: 'Anil Saraswati Vidya Mandir, Ayodhya',
      date: '2019',
      description: 'Score: 87.6%'
    },
    {
      degree: 'Matriculation (Class X)',
      institution: 'Anil Saraswati Vidya Mandir, Ayodhya',
      date: '2017',
      description: 'CGPA: 10/10'
    }
  ];

  return (
    <section id="education" className={styles.education}>
      <h2 className="section-title">Education</h2>
      <div className={styles.timeline}>
        {education.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <h3>{item.degree}</h3>
              <p className={styles.institution}>{item.institution}</p>
              <p className={styles.date}>{item.date}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
