import { Link } from "@Presentation/Components/Elements";
import styles from "./GetInTouch.module.css";
import { Routes } from "@Infrastructure/Router/Routes";

export const GetInTouch = () => {
  return (
    <div className={styles.getInTouch}>
      <div className={styles.visualHook}>
        <h2>¿Creamos un proyecto?</h2>
      </div>
      <div className={styles.contactWithCustomer}>
        <p>Si tienes algún proyecto Web no dudes en contactarme.</p>

        <Link route={Routes.AboutMe} className="linkButton">
          Envíame un correo
        </Link>
      </div>
    </div>
  );
};
