import { Outlet } from "react-router-dom";
import { Footer, Header } from "./Components";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}


export default MainLayout