import { Routes } from "@Infrastructure/Router/Routes";
import { Link } from "@Presentation/Components/Elements";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerContent}>
        <nav role="navigation">
          <ul>
            <li>
              <Link route={Routes.Home}>
                <div>Inicio</div>
              </Link>
            </li>
            <li>
              <Link route={Routes.AboutMe}>
                <div>Sobre mí</div>
              </Link>
            </li>
            <li>
              <Link route={Routes.Blog}>
                <div>Blog</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
