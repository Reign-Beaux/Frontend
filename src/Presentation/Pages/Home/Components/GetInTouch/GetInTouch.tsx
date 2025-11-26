import styles from "./GetInTouch.module.scss";

export const GetInTouch = () => {
  return (
    <section className={`${styles.getInTouch} fade-in delay-3`}>
      <h2 className={styles.contactTitle}>¿Listo para trabajar juntos?</h2>
      <p className={styles.contactDescription}>
        Estoy disponible para nuevos proyectos y colaboraciones. Si buscas un desarrollador comprometido con
        la calidad y la innovación, hablemos.
      </p>
      <a href="mailto:saul@example.com" className="linkButton linkButton-large">
        Contáctame
      </a>
    </section>
  );
};
