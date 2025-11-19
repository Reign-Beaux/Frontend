import { Link } from "@Presentation/Components/Elements";
import styles from "./Footer.module.css";
import { Routes } from "@Infrastructure/Router/Routes";

export const Footer = () => {
  return (
    <div className={styles.footer} role="contentinfo">
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
  );
};
