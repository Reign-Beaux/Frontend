import { Accordion } from "@Presentation/Components/Widgets/Accordion";
import styles from "./WorkExperience.module.scss";

export const WorkExperience = () => {
  return (
    <Accordion label="Experiencia laboral" className={"fade-in delay-3"}>
      <article className={styles.job}>
        {/* Puesto de trabajo */}
        <p>Desarrollador Web | Hibrido</p>
        {/* Empresa | Fecha ingreso - Fecha egreso*/}
        <p>Empresa: StarGroup - Julio 2023 - Presente</p>
        {/* Responsabilidades */}
        <p>Responsabilidades:</p>
        <ul>
          <li>Desarrollo y mantenimiento de aplicaciones web.</li>
          <li>Implementación de mejores prácticas de codificación y revisión de código.</li>
          <li>
            Automatización de procesos y tareas repetitivas (Background Services/Hosted Services/Windows
            Services y Jobs de SQL Server).
          </li>
        </ul>
        {/* Logros */}
        <p>Logros:</p>
        <ul>
          <li>Implementación de un sistema de autenticación seguro utilizando JWT y Refresh Tokens.</li>
          <li>Reducción del tiempo de despliegue mediante la automatización con Docker y Docker Compose.</li>
        </ul>
        {/* Stack */}
        <p>Stack tecnológico:</p>
        <ul>
          <li>Frontend: React, TypeScript.</li>
          <li>Backend: .NET 7, APIs REST, Background Services/Hosted Services/Windows Services.</li>
          <li>Base de datos: SQL Server, Procedimientos Almacenados, Vistas, Índices, Jobs.</li>
          <li>Herramientas: GitLab, Slack, Monday.</li>
        </ul>
      </article>

      <hr />

      <article className={styles.job}>
        {/* Puesto de trabajo */}
        <p>Puesto: Desarrollador Web</p>
        {/* Empresa | Fecha ingreso - Fecha egreso*/}
        <p>Empresa: StarGroup - Julio 2023 - Presente</p>
        {/* Responsabilidades */}
        <p>Responsabilidades:</p>
        <ul>
          <li>Desarrollo y mantenimiento de aplicaciones web.</li>
          <li>Implementación de mejores prácticas de codificación y revisión de código.</li>
          <li>
            Automatización de procesos y tareas repetitivas (Background Services/Hosted Services/Windows
            Services y Jobs de SQL Server).
          </li>
        </ul>
        {/* Logros */}
        <p>Logros:</p>
        <ul>
          <li>Implementación de un sistema de autenticación seguro utilizando JWT y Refresh Tokens.</li>
          <li>Reducción del tiempo de despliegue mediante la automatización con Docker y Docker Compose.</li>
        </ul>
        {/* Stack */}
        <p>Stack tecnológico:</p>
        <ul>
          <li>Frontend: React, TypeScript.</li>
          <li>Backend: .NET 7, APIs REST, Background Services/Hosted Services/Windows Services.</li>
          <li>Base de datos: SQL Server, Procedimientos Almacenados, Vistas, Índices, Jobs.</li>
          <li>Herramientas: GitLab, Slack, Monday.</li>
        </ul>
      </article>

      <hr />

      <article className={styles.job}>
        {/* Puesto de trabajo */}
        <p>Puesto: Desarrollador Web</p>
        {/* Empresa | Fecha ingreso - Fecha egreso*/}
        <p>Empresa: StarGroup - Julio 2023 - Presente</p>
        {/* Responsabilidades */}
        <p>Responsabilidades:</p>
        <ul>
          <li>Desarrollo y mantenimiento de aplicaciones web.</li>
          <li>Implementación de mejores prácticas de codificación y revisión de código.</li>
          <li>
            Automatización de procesos y tareas repetitivas (Background Services/Hosted Services/Windows
            Services y Jobs de SQL Server).
          </li>
        </ul>
        {/* Logros */}
        <p>Logros:</p>
        <ul>
          <li>Implementación de un sistema de autenticación seguro utilizando JWT y Refresh Tokens.</li>
          <li>Reducción del tiempo de despliegue mediante la automatización con Docker y Docker Compose.</li>
        </ul>
        {/* Stack */}
        <p>Stack tecnológico:</p>
        <ul>
          <li>Frontend: React, TypeScript.</li>
          <li>Backend: .NET 7, APIs REST, Background Services/Hosted Services/Windows Services.</li>
          <li>Base de datos: SQL Server, Procedimientos Almacenados, Vistas, Índices, Jobs.</li>
          <li>Herramientas: GitLab, Slack, Monday.</li>
        </ul>
      </article>
    </Accordion>
  );
};
