import { Link } from "react-router-dom";
import styles from "./BlogPresentation.module.scss";
import { Routes } from "@Infrastructure/Router/Routes";
import { articles } from "@Presentation/Pages/Blog/ArticleData";



export const BlogPresentation = () => {
  return (
    <section className="fade-in delay-3">
      <h2 className={styles.sectionTitle}>Últimos Artículos</h2>
      <div className={styles.cardGrid}>
        {articles.slice(0, 4).map((article, index) => (
          <article className={styles.blogCard} key={index}>
            <span className={styles.blogDate}>{article.createdAt.toLocaleDateString()}</span>
            <h3 className={styles.blogTitle}>
              <Link to={`/blog/${article.slug}`}>{article.title}</Link>
            </h3>
            <p>{article.summary}</p>
            <Link to={`/blog/${article.slug}`} className={styles.readMore}>
              Leer más →
            </Link>
          </article>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link to={Routes.Blog} className={`linkButton ${styles.goToBlog}`}>
          Ver todos los artículos
        </Link>
      </div>
    </section>
  );
};
