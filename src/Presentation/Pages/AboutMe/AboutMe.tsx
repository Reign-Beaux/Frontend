import styles from './AboutMe.module.scss';

const AboutMe = () => {
  const skills = [
    'React JS',
    'Astro',
    'CSS',
    'SASS',
    '.NET 6, 7, 8 y 9',
    'Dapper',
    'Entity Framework',
    'Unit Testing',
    'Integration Testing',
    'T-SQL',
    'Clean Architecture',
    'Clean Code',
    'Store Procedure',
    'Jobs',
    'Worker Services',
  ];

  return (
    <div className={styles.aboutMeContainer}>
      <h1 className={styles.name}>Saúl Antonio Morquecho Cela</h1>
      <h2 className={styles.role}>Fullstack Developer</h2>

      <p className={styles.description}>
        Soy un Fullstack Developer apasionado por crear soluciones web robustas y escalables. Con una sólida experiencia en el ecosistema .NET y tecnologías frontend modernas como React y Astro, me especializo en construir aplicaciones que no solo funcionan impecablemente, sino que también ofrecen una experiencia de usuario excepcional. Mi enfoque en Clean Architecture y Clean Code garantiza que cada proyecto sea mantenible y de alta calidad.
      </p>

      <div className={styles.skillsSection}>
        <h3>Conocimientos en:</h3>
        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skillItem}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;