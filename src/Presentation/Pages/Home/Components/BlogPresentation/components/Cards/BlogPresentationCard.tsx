import styles from "./BlogPresentationCard.module.css";

interface Props {
  cardText: string;
}

export const BlogPresentationCard = ({ cardText }: Props) => {
  return (
    <div className={styles.blogPresentationCard}>
      <span>{cardText}</span>
    </div>
  );
};
