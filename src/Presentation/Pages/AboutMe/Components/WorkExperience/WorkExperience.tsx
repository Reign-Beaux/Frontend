import { Accordion } from "@Presentation/Components/Widgets/Accordion";
import styles from "./WorkExperience.module.scss";

export const WorkExperience = () => {
  return (
    <Accordion label="Experiencia laboral" className={"fade-in delay-3"}>
      <div className={styles.workHistoryItem}>
        {/* Header del puesto */}
        <div className={styles.header}>
          <div className={styles.workRole}>Desarrollador Web | Hibrido</div>
          <div className={styles.workCompany}>StarGroup</div>
          <span className={styles.workDate}>Julio 2023 - Presente</span>
        </div>

        {/* Sección: Responsabilidades */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Responsabilidades</h4>
          <ul className={styles.infoList}>
            <li>Desarrollo y mantenimiento de aplicaciones web.</li>
            <li>Implementación de mejores prácticas de desarrollo.</li>
            <li>Automatización de procesos (Background Services/Hosted Services y Jobs SQL).</li>
          </ul>
        </div>

        {/* Sección: Logros */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Logros Destacados</h4>
          <ul className={`${styles.infoList} ${styles.achievements}`}>
            <li>Desarrollé una landing page para el módulo OTT.</li>
            <li>Desarrollé una aplicación para realizar la firma del contrato de forma digital.</li>
            <li>Desarrollé un portal para capturar tickets en casetas de peaje y facturarlas usando Microsoft Dynamics.</li>
            <li>Implementación de sistema de autenticación seguro (JWT/Refresh Tokens).</li>
            <li>Implementación de arquitectura limpia.</li>
            <li>Implementación de principios S.O.L.I.D.</li>
            <li>Implementación de estándares de desarrollo para Frontend, Backend y Base de Datos.</li>
          </ul>
        </div>

        {/* Sección: Stack (Estilo Chips/Tags) */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Stack Tecnológico</h4>
          <div className={styles.techGrid}>
            {/* Agrupamos por categoría para ordenar los chips */}
            <div className={styles.techCategory}>
              <span>Frontend:</span>
              <div className={styles.tags}>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>TypeScript</span>
                {/* <span className={styles.tag}>Módulos CSS/Sass</span>
                <span className={styles.tag}>Scream Architecture</span>
                <span className={styles.tag}>Feature-Sliced Design</span>
                <span className={styles.tag}>Vite</span>
                <span className={styles.tag}>PNPM</span> */}
              </div>
            </div>
            <div className={styles.techCategory}>
              <span>Backend:</span>
              <div className={styles.tags}>
                <span className={styles.tag}>.NET 7</span>
                <span className={styles.tag}>API REST</span>
                <span className={styles.tag}>Background Services</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <span>Database:</span>
              <div className={styles.tags}>
                <span className={styles.tag}>SQL Server</span>
                <span className={styles.tag}>Memcached</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <span>Tools:</span>
              <div className={styles.tags}>
                <span className={styles.tag}>GitLab</span>
                <span className={styles.tag}>Slack</span>
                <span className={styles.tag}>IIS</span>
                <span className={styles.tag}>Visual Studio</span>
                <span className={styles.tag}>Visual Studio Code</span>
                <span className={styles.tag}>ChatGPT</span>
                <span className={styles.tag}>Gemini</span>
                <span className={styles.tag}>GitHub Copilot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.workHistoryItem}>
        {/* Header del puesto */}
        <div className={styles.header}>
          <div className={styles.workRole}>Desarrollador .NET | Presencial</div>
          <div className={styles.workCompany}>Tribunal Electoral del Poder Judicial de la Federación</div>
          <span className={styles.workDate}>Febrero 2022 - Marzo 2023</span>
        </div>

        {/* Sección: Responsabilidades */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Responsabilidades</h4>
          <ul className={styles.infoList}>
            <li>Desarrollo y mantenimiento de aplicaciones web.</li>
            <li>Optimización de consultas y reafactorización de código legacy.</li>
          </ul>
        </div>

        {/* Sección: Logros */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Logros Destacados</h4>
          <ul className={`${styles.infoList} ${styles.achievements}`}>
            <li>Optimicé y actualicé el Portal IUS Electoral.</li>
            <li>Desarrollé una aplicación interna que administra las prestaciones extras dadas por el tribunal.</li>
          </ul>
        </div>

        {/* Sección: Stack (Estilo Chips/Tags) */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Stack Tecnológico</h4>
          <div className={styles.techGrid}>
            {/* Agrupamos por categoría para ordenar los chips */}
            <div className={styles.techCategory}>
              <span>Frontend:</span>
              <div className={styles.tags}>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>Angular</span>
                <span className={styles.tag}>TypeScript</span>
                <span className={styles.tag}>CSS</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <span>Backend:</span>
              <div className={styles.tags}>
                <span className={styles.tag}>.NET 7</span>
                <span className={styles.tag}>API REST</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <span>Database:</span>
              <div className={styles.tags}>
                <span className={styles.tag}>SQL Server</span>
                <span className={styles.tag}>Memcached</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <span>Tools:</span>
              <div className={styles.tags}>
                <span className={styles.tag}>Team Foundation Server</span>
                <span className={styles.tag}>Skype</span>
                <span className={styles.tag}>Visual Studio</span>
                <span className={styles.tag}>Visual Studio Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.workHistoryItem}>
        {/* Header del puesto */}
        <div className={styles.header}>
          <div className={styles.workRole}>Consultor Jr. | Hibrido</div>
          <div className={styles.workCompany}>Advanta Sistemas de Información</div>
          <span className={styles.workDate}>Diciembre 2018 - Enero 2022</span>
        </div>

        {/* Sección: Responsabilidades */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Responsabilidades</h4>
          <ul className={styles.infoList}>
            <li>Desarrollo y mantenimiento de funcionalidades del E.R.P. propietario.</li>
            <li>Levantamiento de requerimientos.</li>
            <li>Automatización de procesos específicos para ciertos clientes.</li>
          </ul>
        </div>

        {/* Sección: Logros */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Logros Destacados</h4>
          <ul className={`${styles.infoList} ${styles.achievements}`}>
            <li>Automaticé el proceso productivo de una empresa de procesadora de vidrio mediante el uso de códigos de barra.</li>
            <li>Desarrolle un módulo personalizable de descuentos a clientes específicos.</li>
            <li>Desarrolle diversas consultas para consultar o obtener reportes.</li>
          </ul>
        </div>

        {/* Sección: Stack (Estilo Chips/Tags) */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Stack Tecnológico</h4>
          <div className={styles.techGrid}>
            {/* Agrupamos por categoría para ordenar los chips */}
            <div className={styles.techCategory}>
              <span>Frontend:</span>
              <div className={styles.tags}>
                <span className={styles.tag}>Vue</span>
                <span className={styles.tag}>JavaScript</span>
                <span className={styles.tag}>CSS</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <span>Backend:</span>
              <div className={styles.tags}>
                <span className={styles.tag}>Ruby</span>
                <span className={styles.tag}>API REST</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <span>Database:</span>
              <div className={styles.tags}>
                <span className={styles.tag}>PostgreSQL</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <span>Tools:</span>
              <div className={styles.tags}>
                <span className={styles.tag}>BitBucket</span>
                <span className={styles.tag}>Jira</span>
                <span className={styles.tag}>Skype</span>
                <span className={styles.tag}>Visual Studio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Accordion>
  );
};
