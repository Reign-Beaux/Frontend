import styles from "./Presentation.module.scss";

export const Presentation = () => {
  return (
    <section className={styles.presentation}>
      <div></div>
      <div>
        <h1>Sobre Mí</h1>
        <p className="delay-1">
          Hola, soy <strong>Saúl Antonio Morquecho Cela</strong>, un desarrollador Fullstack con una sólida
          trayectoria en la creación de soluciones de software robustas.
        </p>
      </div>
    </section>
  );
};
