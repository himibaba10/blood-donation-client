import { Outlet } from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
