import { Outlet } from "react-router-dom";
import { Footer, Header } from "./Components";
import "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}


export default MainLayout