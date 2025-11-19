import { Routes } from "@Infrastructure/Router/Routes";
import { Link } from "@Presentation/Components/Elements";
import styles from "./SmallPresentation.module.css";

export const SmallPresentation = () => (
  <div className={styles.smallPresentation}>
    <h1 className={styles.title}>Fullstack Developer</h1>
    <p>Hola, soy Saúl Antonio y me encanta el desarrollo de software.</p>
    <Link route={Routes.AboutMe} className="linkButton">
      Sobre Mí
    </Link>
  </div>
);
