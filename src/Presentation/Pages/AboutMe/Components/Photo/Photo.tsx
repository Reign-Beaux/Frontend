import styles from './Photo.module.scss';

export const Photo = () => {
  return (
    <div className={styles.photoContainer}>
      <img src="./profile.jpg" />
    </div>
  );
};
