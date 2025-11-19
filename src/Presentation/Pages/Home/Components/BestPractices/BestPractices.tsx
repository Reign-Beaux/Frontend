import { Routes } from "@Infrastructure/Router/Routes";
import { Link } from "@Presentation/Components/Elements";
import styles from "./BestPractices.module.css";

export const BestPractices = () => {
  return (
    <div className={styles.bestPractices}>
      <div className={styles.paragraph}>
        <h2>Hablemos de buenas prácticas</h2>
        <p>
          Sin importar el área al que nos dediquemos siempre debemos cuidar nuestró código, ya que con el
          podemos crear algo parecido a la magía ya sea que algo salga totalmente bien o tan mal que funciona
          pero no sabemos por qué, teinvito a pasar por mi blog donde te comparto diferentes artículos sobre:
        </p>
        <ul>
          <li>IA</li>
          <li>Arquitectura limpia</li>
          <li>Principios SOLID</li>
          <li>Docker</li>
          <li>JavaScript/TypeScript</li>
        </ul>
        <p>Y más cosas que aprenda con el tiempo.</p>
        <Link route={Routes.AboutMe} className="linkButton">
          Blog
        </Link>
      </div>
      <div className={styles.profilePicture}>
        <img src="./profile.jpg" alt="profile-picture" />
      </div>
    </div>
  );
};
