import styles from './Skills.module.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'SQL', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'BI & Visualization',
      skills: ['Power BI', 'DAX', 'MS Excel', 'Dashboards', 'Chart.js']
    },
    {
      title: 'Frameworks & DB',
      skills: ['Flask', 'Vue.js', 'Bootstrap', 'SQLite', 'PostgreSQL', 'SQLAlchemy']
    },
    {
      title: 'Analytics & ML',
      skills: ['EDA', 'Statistical Analysis', 'Machine Learning', 'Data Wrangling', 'KPI Reporting']
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <h2 className="section-title">Skills & Expertise</h2>
      <div className={styles.grid}>
        {skillCategories.map((category, index) => (
          <div key={index} className={styles.category}>
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, sIndex) => (
                <li key={sIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
