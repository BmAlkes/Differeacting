import {  Outlet } from "react-router-dom";
import HeaderApp from "../components/headerApp";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../hooks/useAuth";
import { useOpenStore } from "../store/store";




export const DashboardLayout = () => {
  const {data, isLoading} = useAuth()
  const {open} = useOpenStore()

document.body.dir = "ltr"


  if(isLoading) return 'Loading...'
  if(data) return (

    <>
        <section className="w-full  bg-gray-200 h-screen bg-[url('https://res.cloudinary.com/landingpage2/image/upload/v1732558718/5000x5000-4_1_j6ngaz.jpg')] bg-no-repeat bg-center bg-contain relative">
        <Sidebar/>
        <HeaderApp name={data.name} profileImage={data?.profileImage?.filePath} />
        <div className={`${open ?"pl-[250px]" :"pl-[60px]" }  pr-[20px] pt-[70px]  w-full h-full overflow-y-auto`}>
          <Outlet/>
        </div>
        </section>
      

    </>
  );
};
