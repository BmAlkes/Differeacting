import { Outlet } from "react-router-dom";
import HeaderApp from "../components/headerApp";

export const DashboardLayout = () => {
  return (
    <>


        <HeaderApp />
        <section className="w-full mx-auto p-5 bg-gray-200 min-h-screen">
          <Outlet />
        </section>
      

    </>
  );
};
