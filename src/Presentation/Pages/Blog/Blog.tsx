import styles from "./Blog.module.scss";
import { ArticleCard, type ArticleCardProps } from "./Components";

const articlesThumbnails: ArticleCardProps[] = [
  {
    id: "1",
    title: "Introducción a React",
    summary: "Aprende los conceptos básicos de React y cómo empezar a construir aplicaciones web.",
    createdAt: new Date("2023-01-15"),
  },
  {
    id: "2",
    title: "Guía de TypeScript",
    summary: "Descubre cómo TypeScript puede mejorar la calidad de tu código JavaScript.",
    createdAt: new Date("2023-02-10"),
  },
  {
    id: "3",
    title: "Mejores prácticas de CSS",
    summary: "Consejos y trucos para escribir CSS limpio y mantenible.",
    createdAt: new Date("2023-03-05"),
  },
];

const Blog = () => {
  return (
    <section className={styles.blogContainer}>
      <h1 className="fade-in">Blog</h1>
      <p className="fade-in delay-1">Pensamientos, tutoriales y guías sobre desarrollo de software.</p>
      <div className={styles.articlesList}>
        {articlesThumbnails.map(article => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
