import styles from "./Blog.module.scss";
import { ArticleCard } from "./Components";

import { articles } from "./ArticleData";

const Blog = () => {
  return (
    <section className={styles.blogContainer}>
      <h1 className="fade-in">Blog</h1>
      <p className="fade-in delay-1">Pensamientos, tutoriales y guías sobre desarrollo de software.</p>
      <div className={`${styles.articlesList} fade-in delay-2`}>
        {articles.map(article => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
