import styles from './AboutMe.module.scss';
import { Photo } from './Components/Photo/Photo';
import { Presentation } from './Components/Presentation/Presentation';

const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <Photo />
      <Presentation />
    </div>
  );
}

export default AboutMe;