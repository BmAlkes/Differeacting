import { Outlet } from "react-router-dom";
import Header from "../components/header";
import NewFooter from "../components/newFooter";


const Layout = () => {
  return (
    <>
      <>
        <Header />
        <Outlet />
        <NewFooter />
      </>
    </>
  );
};

export default Layout;
