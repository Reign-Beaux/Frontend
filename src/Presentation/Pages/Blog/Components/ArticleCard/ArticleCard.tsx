import styles from "./ArticleCard.module.scss";

export interface ArticleCardProps {
  id: string;
  title: string;
  summary: string;
  createdAt: Date;
}

export const ArticleCard = ({ id, title, summary, createdAt }: ArticleCardProps) => {
  return (
    <article id={id} className={styles.articleCard}>
      <span className={styles.articleDate}>{createdAt.toDateString()}</span>
      <h2 className={styles.articleCardTitle}>
        <a href={`blog/${id}`}>{title}</a>
      </h2>
      <p>{summary}</p>
    </article>
  );
};
