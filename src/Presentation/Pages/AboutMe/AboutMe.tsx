import { Focus, Presentation, Skills } from "./Components";

import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <Presentation />
      <Focus />
      <Skills />
    </div>
  );
};

export default AboutMe;
