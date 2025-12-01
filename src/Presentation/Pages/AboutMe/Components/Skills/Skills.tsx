import styles from "./Skills.module.scss";

export const Skills = () => {
  return (
    <section className={`${styles.skills} fade-in delay-3`}>
      <div className={styles.grouped}>
        <h2>Habilidades técnicas</h2>
        <div className={styles.skillsGrid}>
          <span className={styles.skillTag}>GitHub</span>
          <span className={styles.skillTag}>GitLab</span>
          <span className={styles.skillTag}>Docker</span>
          <span className={styles.skillTag}>Docker Compose</span>
          <span className={styles.skillTag}>Clean Architecture</span>
          <span className={styles.skillTag}>Clean Code</span>
          <span className={styles.skillTag}>Principios SOLID</span>
        </div>
      </div>

      <div className={styles.grouped}>
        <h2>Frontend</h2>
        <div className={styles.skillsGrid}>
          <span className={styles.skillTag}>Vite</span>
          <span className={styles.skillTag}>React</span>
          <span className={styles.skillTag}>Astro</span>
          <span className={styles.skillTag}>HTML</span>
          <span className={styles.skillTag}>TypeScript</span>
          <span className={styles.skillTag}>JavaScript</span>
          <span className={styles.skillTag}>CSS Modules</span>
        </div>
        <h3>Bibliotecas</h3>
        <div className={styles.skillsGrid}>
          <span className={styles.skillTag}>Sass</span>
          <span className={styles.skillTag}>React Router Dom</span>
          <span className={styles.skillTag}>Axios</span>
          <span className={styles.skillTag}>React Hook Form</span>
          <span className={styles.skillTag}>Yup</span>
          <span className={styles.skillTag}>Zustand</span>
        </div>
      </div>

      <div className={styles.grouped}>
        <h2>Backend</h2>
        <div className={styles.skillsGrid}>
          <span className={styles.skillTag}>.NET 7/8/9/10</span>
          <span className={styles.skillTag}>.NET Framework 4.5</span>
          <span className={styles.skillTag}>C#</span>
          <span className={styles.skillTag}>APIs REST</span>
          <span className={styles.skillTag}>Background Services / Hosted Services</span>
          <span className={styles.skillTag}>Middlewares</span>
          <span className={styles.skillTag}>JWT</span>
          <span className={styles.skillTag}>Refresh Token</span>
          <span className={styles.skillTag}>Rate Limiting</span>
        </div>
        <h3>Bibliotecas</h3>
        <div className={styles.skillsGrid}>
          <span className={styles.skillTag}>Entity Framework</span>
          <span className={styles.skillTag}>Dapper</span>
          <span className={styles.skillTag}>MediatR</span>
          <span className={styles.skillTag}>AutoMapper</span>
          <span className={styles.skillTag}>FluentValidation</span>
          <span className={styles.skillTag}>FluentAssertions</span>
          <span className={styles.skillTag}>MoQ</span>
          <span className={styles.skillTag}>Memcached</span>
        </div>
        <h3>Patrónes de diseño</h3>
        <div className={styles.skillsGrid}>
          <span className={styles.skillTag}>Inyección de dependencias</span>
          <span className={styles.skillTag}>Mediator Pattern</span>
          <span className={styles.skillTag}>Result Pattern</span>
          <span className={styles.skillTag}>Unit of Work</span>
          <span className={styles.skillTag}>Repository Pattern</span>
          <span className={styles.skillTag}>CQRS</span>
          <span className={styles.skillTag}>Factory Pattern</span>
          <span className={styles.skillTag}>Singleton</span>
          <span className={styles.skillTag}>Specifications Pattern</span>
          <span className={styles.skillTag}>Problem Details</span>
        </div>
      </div>
      <div className={styles.grouped}>
        <h2>Base de datos</h2>
        <div className={styles.skillsGrid}>
          <span className={styles.skillTag}>SQL Server</span>
        </div>
        <h3>Conocimientos Generales</h3>
        <div className={styles.skillsGrid}>
          <span className={styles.skillTag}>Procedimientos Almacenados</span>
          <span className={styles.skillTag}>Vistas</span>
          <span className={styles.skillTag}>Índices</span>
          <span className={styles.skillTag}>Normalización</span>
          <span className={styles.skillTag}>Transacciones</span>
          <span className={styles.skillTag}>Funciones</span>
          <span className={styles.skillTag}>Jobs</span>
          <span className={styles.skillTag}>Merges</span>
          <span className={styles.skillTag}>Tipos Tabla</span>
          <span className={styles.skillTag}>CTE</span>
        </div>
      </div>
    </section>
  );
};
