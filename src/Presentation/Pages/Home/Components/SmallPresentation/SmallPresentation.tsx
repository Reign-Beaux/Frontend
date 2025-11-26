import styles from "./SmallPresentation.module.scss";

export const SmallPresentation = () => (
  <section className={styles.smallPresentation}>
    <h1 className="fade-in">Hola, soy Saúl Antonio Morquecho Cela</h1>
    <p className="fade-in delay-1">
      Soy un desarrollador Fullstack apasionado por construir aplicaciones web modernas, escalables y
      eficientes.
    </p>
    <p className="fade-in delay-2">
      Especializado en el ecosistema .NET y tecnologías frontend como React y Astro.
    </p>
    <div className="fade-in delay-3" style={{marginTop: "2rem"}}>
      <a href="about.html" className="btn">
        Conoce más sobre mí
      </a>
    </div>
  </section>
);
