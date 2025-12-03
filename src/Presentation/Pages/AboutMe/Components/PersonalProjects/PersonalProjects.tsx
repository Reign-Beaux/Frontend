import { Accordion } from "@Presentation/Components/Widgets/Accordion";
import styles from "./PersonalProjects.module.scss";

export const PersonalProjects = () => {
  return (
    <Accordion label="Proyectos personales" className={"fade-in delay-3"}>
      {/* Proyecto 1 */}
      <div className={styles.projectItem}>
        <div className={styles.header}>
          <h3 className={styles.projectName}>Task Master Pro</h3>
          <div className={styles.links}>
            <a 
              href="https://github.com/tu-usuario/repo" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              GitHub
            </a>
            <a 
              href="https://mi-proyecto.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.linkButton} ${styles.deploy}`}
            >
              Ver Demo
            </a>
          </div>
        </div>

        <div className={styles.body}>
          <p className={styles.description}>
            Una aplicación de gestión de tareas diseñada para equipos remotos. 
            Permite la asignación en tiempo real, seguimiento de estados mediante 
            tableros Kanban y notificaciones automatizadas.
          </p>

          <div className={styles.techStack}>
            <span className={styles.label}>Tecnologías:</span>
            <div className={styles.tags}>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>Firebase</span>
              <span className={styles.tag}>Tailwind</span>
              <span className={styles.tag}>Zustand</span>
            </div>
          </div>
        </div>
      </div>

      {/* Proyecto 2 */}
      <div className={styles.projectItem}>
        <div className={styles.header}>
          <h3 className={styles.projectName}>E-Commerce API</h3>
          <div className={styles.links}>
            <a 
              href="https://github.com/tu-usuario/api" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              GitHub
            </a>
            {/* Si no hay deploy, simplemente no renderizas el segundo botón */}
          </div>
        </div>

        <div className={styles.body}>
          <p className={styles.description}>
            API RESTful escalable para una plataforma de comercio electrónico. 
            Incluye pasarela de pagos con Stripe, gestión de inventario y 
            autenticación basada en roles.
          </p>

          <div className={styles.techStack}>
            <span className={styles.label}>Tecnologías:</span>
            <div className={styles.tags}>
              <span className={styles.tag}>.NET 8</span>
              <span className={styles.tag}>SQL Server</span>
              <span className={styles.tag}>Docker</span>
              <span className={styles.tag}>Stripe API</span>
            </div>
          </div>
        </div>
      </div>
    </Accordion>
  );
};