import { useQueryClient } from "@tanstack/react-query";
import { Grid, Home, LogOut, Newspaper, PieChart } from "lucide-react";
import { AiOutlineProfile } from "react-icons/ai";
import { FaAppStore, FaUserCog } from "react-icons/fa";
import { IoNotifications, IoPeople } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useOpenStore } from "../../store/store";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";


const Sidebar = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const logout = () => {
    localStorage.removeItem("Auth_Token");
    queryClient.invalidateQueries({ queryKey: ["user"] });
    navigate("/login");
  };
  const navLinks = [
    {
      title: "Dashboard",
      link: "dashboard",
      icon: <Home  width="22px" height="22px" />,
    },
    {
      title: "Clients",
      link: "dashboard/clients",
      icon: <FaAppStore  width="22px" height="22px" />,
    },
    {
      title: "Projects",
      link: "dashboard/projects",
      icon: <Grid width="22px" height="22px" />,
    },
    {
      title: "Analytics",
      link: "dashboard/analytics",
      icon: <PieChart  width="22px" height="22px" />,
    },
    {
      title: "Workflows",
      link: "dashboard/workflows",
      icon: <IoPeople  width="22px" height="22px" />,
    },
    {
      title: "Notifications",
      link: "dashboard/notifications",
      icon: <IoNotifications  width="22px" height="22px" />,
    },
    {
      title: "Blog",
      link: "dashboard/blog",
      icon: <Newspaper  width="22px" height="22px" />,
    },
    {
      title: "Create User",
      link: "dashboard/register",
      icon: <FaUserCog  width="22px" height="22px" />,
    },
    {
      title: "Profile",
      link: "dashboard/profile",
      icon: <AiOutlineProfile  width="22px" height="22px" />,
    },
  ];
  const{open} = useOpenStore()
  return (
    <div className={`fixed left-0 top-0 ${open ? 'w-[230px]':'w-[60px]'}  overflow-hidden h-full flex flex-col z-50 `}>
      {open ?(<div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-[#fff]">

        <Link to="/dashboard">
          <img
            src="https://res.cloudinary.com/landingpage2/image/upload/v1715794760/Logo_Horizontal_C_2_ducktr.png"
            alt=""
          />
        </Link>

        <span className="text-[#6ecfef] font-semibold text-2xl md:hidden block">
          L.
        </span>
      </div>):(<><div className="w-full flex items-center justify-center p-3 h-[70px] bg-[#fff]">

<Link to="/dashboard">
  <img
    src="https://res.cloudinary.com/landingpage2/image/upload/v1715794377/Icon_C_w5j74y.png"
    alt=""
  />
</Link>


</div></>)}
      
      <div className="w-full h-[calc(100vh-70px)] border-r flex flex-col gap-2 border-slate-300 bg-[#fff] py-5 md:px-3 px-3 relative">
        {navLinks.map((link) => {
          return (
            
            
            
            
            <NavLink
            to={`/${link?.link}`}
            className={({ isActive }) =>
              isActive
            ? "bg-[#6ecfef] font-bold w-full rounded-md "
            : "transparent w-full"
          }
          key={link.title}
          >
            <TooltipProvider>
            <Tooltip>
            <TooltipTrigger> 
               <div
                className={`flex  flex-row-reverse     gap-2 w-full rounded-lg text-slate-600 hover:bg-[#6ecfef] hover:text-white px-2 py-3 cursor-pointer}`}
                >
                {link.icon}
                <span className={`font-medium text-[15px]  ${open? "":"hidden"}`}>
                  {link.title}
                </span>
              </div></TooltipTrigger>
                <TooltipContent>
{link.title}
             
                  </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
            </NavLink>
          );
        })}
        <div
          className={`flex absolute bottom-4 items-center md:justify-start justify-center gap-2 ${open ?"w-[90%]" :"w-[70%]"}  rounded-lg  px-2 py-3 cursor-pointer bg-gray-200`}
          onClick={logout}
        >
          <LogOut />
          <span className={`font-medium text-[15px] ${open ?"":"hidden"}`}>
            Log Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
