import { BlogPresentation, GetInTouch, SmallPresentation } from "./Components";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <SmallPresentation />
      <BlogPresentation />
      <GetInTouch />
    </div>
  );
};

export default Home;
