import { Outlet } from "react-router-dom";
import { Footer, Header } from "./Components";

import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.mainApplication}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}


export default MainLayout