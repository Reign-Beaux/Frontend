import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <p>&copy; 2025 Saúl Antonio Morquecho Cela. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
