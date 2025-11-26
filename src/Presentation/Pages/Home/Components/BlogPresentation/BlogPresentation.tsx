import { Link } from "@Presentation/Components/Elements";
import styles from "./BlogPresentation.module.scss";
import { Routes } from "@Infrastructure/Router/Routes";

interface ArticleFake {
  title: string;
  smallDescription: string;
  createdAt: string;
}

const articleFake: ArticleFake[] = [
  {
    title: "Novedades en .NET 9",
    smallDescription: "Un repaso a las características más importantes y mejoras de rendimiento.",
    createdAt: "25 de Noviembre, 2025",
  },
  {
    title: "Clean Architecture",
    smallDescription: "Cómo estructurar tus proyectos para que sean escalables y mantenibles.",
    createdAt: "10 de Noviembre, 2025",
  },
  {
    title: "Astro & React",
    smallDescription: "Integrando componentes de React en sitios estáticos con Astro.",
    createdAt: "15 de Octubre, 2025",
  },
  {
    title: "SQL",
    smallDescription: "Conociendo las bases de datos relacionales y cómo utilizarlas eficientemente.",
    createdAt: "30 de Septiembre, 2025",
  },
];

export const BlogPresentation = () => {
  return (
    <section className="fade-in delay-3">
      <h2 className={styles.sectionTitle}>Últimos Artículos</h2>
      <div className={styles.cardGrid}>
        {articleFake.map((article, index) => (
          <article className={styles.blogCard} key={index}>
            <span className={styles.blogDate}>{article.createdAt}</span>
            <h3 className={styles.blogTitle}>
              <a href="posts/novedades-dotnet-9.html">{article.title}</a>
            </h3>
            <p>{article.smallDescription}</p>
            <Link route={Routes.Blog} className={styles.readMore}>
              Leer más →
            </Link>
          </article>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <a href="blog.html" className={`linkButton ${styles.goToBlog}`}>
          Ver todos los artículos
        </a>
      </div>
    </section>
  );
};
