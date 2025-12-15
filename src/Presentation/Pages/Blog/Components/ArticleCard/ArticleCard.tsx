import { Link } from "react-router-dom";
import styles from "./ArticleCard.module.scss";

export interface ArticleCardProps {
  id: string;
  title: string;
  summary: string;
  createdAt: Date;
  slug: string;
}

export const ArticleCard = ({ id, title, summary, createdAt, slug }: ArticleCardProps) => {
  return (
    <article id={id} className={styles.articleCard}>
      <span className={styles.articleDate}>{createdAt.toDateString()}</span>
      <h2 className={styles.articleCardTitle}>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
    </article>
  );
};
