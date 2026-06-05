import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Comment Category Prediction Challenge',
      subtitle: 'Machine Learning | IIT Madras BS Project',
      date: 'Jan 2026 – Apr 2026',
      description: [
        'Developed a multi-class machine learning pipeline to categorize user comments within a large, imbalanced dataset using Python, Scikit-learn, and LightGBM.',
        'Addressed severe class imbalance by implementing a soft-voting ensemble of Logistic Regression and GPU-accelerated LightGBM.'
      ],
      tech: ['Python', 'Scikit-learn', 'LightGBM', 'TF-IDF'],
      github: 'https://github.com/sarthak-gupta096/Comment-Category-Prediction-Challenge-IITM-Jan-2026.git',
      linkedin: 'https://www.linkedin.com/posts/sarthak-gupta-4b5b1921b_machinelearning-datascience-commentprediction-ugcPost-7460255386512691200-P6WI/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeERIkBiK7jrFjVZxXIqIJfkcEsD8jiFgA'
    },
    {
      title: 'JobSyncr – Full-Stack Placement Portal',
      subtitle: 'IIT Madras BS Project',
      date: 'Jan 2026 – Apr 2026',
      description: [
        'Designed and implemented a relational database schema to manage students, companies, job postings, and applications.',
        'Built RESTful APIs with Flask to support job posting, application tracking, and user analytics.'
      ],
      tech: ['Vue.js', 'Flask API', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Celery', 'Bootstrap'],
      github: 'https://github.com/sarthak-gupta096/Placement_Portal_Application-IITMBS-.git',
      linkedin: 'https://www.linkedin.com/posts/sarthak-gupta-4b5b1921b_iitmbs-datascience-systemarchitecture-ugcPost-7459953901723787264-lAqg/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeERIkBiK7jrFjVZxXIqIJfkcEsD8jiFgA'
    },
    {
      title: 'A-Z Household Services',
      subtitle: 'Full-Stack Service Platform',
      date: 'Sept 2024 – Dec 2024',
      description: [
        'Integrated a Chart.js summary widget on the admin dashboard to visualize key booking volumes and revenue trends.',
        'Engineered a dynamic search and filtering system using SQLAlchemy.'
      ],
      tech: ['Flask', 'SQLAlchemy', 'SQLite', 'Bootstrap', 'Chart.js'],
      github: 'https://github.com/sarthak-gupta096/A-Z-Household-Management-Application-IITMBS.git',
      linkedin: 'https://www.linkedin.com/posts/sarthak-gupta-4b5b1921b_webdevelopment-iitmadras-project-activity-7277390940577640449-TvG3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeERIkBiK7jrFjVZxXIqIJfkcEsD8jiFgA'
    },
    {
      title: 'UIDAI Data Hackathon 2026',
      subtitle: 'Biometric Analytics Dashboard',
      date: '2026',
      description: [
        'Processed and cleaned a messy biometric dataset of over 1.8 million rows using Power Query.',
        'Designed a multi-page Power BI dashboard to surface enrolment trends and demographic patterns.'
      ],
      tech: ['Power BI', 'DAX', 'Power Query', 'ETL'],
      github: 'https://github.com/sarthak-gupta096/UIDAI-Data-Hackathon-2026-Biometric-Analytics-Dashboard.git',
      linkedin: 'https://www.linkedin.com/posts/sarthak-gupta-4b5b1921b_uidaihackathon-bigdata-datadrishti-activity-7435571589355720704-V28M?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeERIkBiK7jrFjVZxXIqIJfkcEsD8jiFgA'
    },
    {
      title: 'Student Exam Performance – Power BI Dashboard',
      subtitle: 'Power BI Visualization Project',
      date: '2024',
      description: [
        'Built an interactive Power BI dashboard with data modeling, DAX calculations, and custom visuals to surface KPIs such as pass rates and score distributions.',
        'Enabled drill-down filtering by demographic and academic variables to support data-driven decision-making for stakeholders.'
      ],
      tech: ['Power BI', 'DAX', 'MS Excel', 'Data Modeling', 'KPI Reporting'],
      github: '',
      linkedin: 'https://www.linkedin.com/posts/sarthak-gupta-4b5b1921b_powerbi-datavisualization-learningjourney-activity-7361232770913693696-Za_R?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeERIkBiK7jrFjVZxXIqIJfkcEsD8jiFgA'
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2 className="section-title">Key Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.titleRow}>
                <h3>{project.title}</h3>
                <div className={styles.links}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className={styles.link} aria-label="GitHub Repository">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  )}
                  {project.linkedin && project.linkedin !== '#' && (
                    <a href={project.linkedin} target="_blank" rel="noreferrer" className={styles.link} aria-label="LinkedIn Post">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <p className={styles.subtitle}>{project.subtitle}</p>
              <p className={styles.date}>{project.date}</p>
            </div>
            <ul className={styles.description}>
              {project.description.map((item, iIndex) => (
                <li key={iIndex}>{item}</li>
              ))}
            </ul>
            <div className={styles.tech}>
              {project.tech.map((t, tIndex) => (
                <span key={tIndex}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
