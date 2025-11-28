import styles from "./Focus.module.scss";

export const Focus = () => {
  return (
    <section className={`fade-in delay-2 ${styles.focusContainer}`}>
      <h2>Mi Enfoque</h2>
      <div className={styles.card}>
        <p>
          Me enfoco en escribir código limpio, mantenible y eficiente. Disfruto resolviendo problemas
          complejos y aprendiendo continuamente sobre nuevas tecnologías y mejores prácticas en el desarrollo
          de software.
        </p>
      </div>
    </section>
  );
};
