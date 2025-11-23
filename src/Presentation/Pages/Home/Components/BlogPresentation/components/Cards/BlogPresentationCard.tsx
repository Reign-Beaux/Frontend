import styles from "./BlogPresentationCard.module.scss";

interface Props {
  title: string;
  smallDescription: string;
}

export const BlogPresentationCard = ({ title, smallDescription }: Props) => {
  return (
    <div className={styles.blogPresentationCard}>
      <h3>{title}</h3>
      <p>{smallDescription}</p>
    </div>
  );
};
