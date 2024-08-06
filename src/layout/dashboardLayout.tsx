import { Outlet } from "react-router-dom";
import HeaderApp from "../components/headerApp";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../hooks/useAuth";



export const DashboardLayout = () => {
  const {data,isError, isLoading} = useAuth()
  console.log(isError)


  if(isLoading) return 'Loading...'
  if(data) return (
    <>
        <section className="w-full  bg-gray-200 h-screen bg-[url('https://res.cloudinary.com/landingpage2/image/upload/v1715794377/Icon_C_w5j74y.png')] bg-no-repeat bg-center relative">
        <Sidebar/>
        <HeaderApp name={data.name} />
        <div className="md:pl-[250px] pl-[60px] pr-[20px] pt-[70px]  w-full h-full overflow-y-auto">
          <Outlet/>
        </div>
        </section>
      

    </>
  );
};
