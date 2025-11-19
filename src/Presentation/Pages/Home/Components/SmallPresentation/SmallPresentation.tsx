import { Routes } from "@Infrastructure/Router/Routes";
import { Link } from "@Presentation/Components/Elements";
import styles from "./SmallPresentation.module.css";

export const SmallPresentation = () => (
  <div className={styles.smallPresentation}>
    <div className={styles.smallPresentationContent}>
      <h1 className={styles.title}>Saúl Antonio Morquecho Cela</h1>
      <p>Hola soy Fullstack Developer enfocado en la productividad y la calidad del código.</p>
      <Link route={Routes.AboutMe} className="linkButton">
        Sobre Mí
      </Link>
    </div>
  </div>
);
