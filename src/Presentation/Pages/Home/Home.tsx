import { BestPractices, GetInTouch, SmallPresentation } from "./Components";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <SmallPresentation />
      <BestPractices />
      <GetInTouch />
    </div>
  );
};

export default Home;
