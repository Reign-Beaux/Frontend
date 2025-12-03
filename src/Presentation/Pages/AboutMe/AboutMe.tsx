import { Focus, PersonalProjects, Presentation, Skills, WorkExperience } from "./Components";

import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <Presentation />
      <Focus />
      <Skills />
      <WorkExperience />
      <PersonalProjects />
    </div>
  );
};

export default AboutMe;
