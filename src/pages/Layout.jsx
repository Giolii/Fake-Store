import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "./styles/Layout.module.css";

const Layout = ({ totalQuantity }) => {
  return (
    <div className={styles.layout}>
      <Navbar totalQuantity={totalQuantity} />
      <div className={styles.main}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
