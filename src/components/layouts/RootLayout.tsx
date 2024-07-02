import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./RootLayout.scss";

const MainLayout = () => {
  return (
    <div className="root-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
