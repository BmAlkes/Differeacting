import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header";
import NewFooter from "../components/newFooter";

const Layout = () => {
  const location = useLocation();
  console.log(location);

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
