import { Presentation, Skills } from "./Components";

import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <Presentation />
      <Skills />
    </div>
  );
};

export default AboutMe;
