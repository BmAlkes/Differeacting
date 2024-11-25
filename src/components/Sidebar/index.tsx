import { useQueryClient } from "@tanstack/react-query";
import { Grid, Home, LogOut, Newspaper, PieChart } from "lucide-react";
import { AiOutlineProfile } from "react-icons/ai";
import { FaAppStore, FaRegCalendar, FaUserCog } from "react-icons/fa";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useOpenStore } from "../../store/store";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

import { BsEnvelopePaper, BsGraphUpArrow } from "react-icons/bs";


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
      title: "Calendar",
      link: "dashboard/calendar",
      icon: <FaRegCalendar width="22px" height="22px" />,
    },
    {
      title: "Finance",
      link: "dashboard/expanses",
      icon: <BsGraphUpArrow width="22px" height="22px" />,
    },
    
    {
      title: "Leads",
      link: "dashboard/leads",
      icon: <BsEnvelopePaper width="26px" height="28px" />,
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
      {open ?(<div className="w-full flex  items-center md:justify-start justify-center md:pl-5 h-[70px] bg-[#fff]">

        <Link to="/dashboard">
          <img
            src="https://res.cloudinary.com/landingpage2/image/upload/v1732303053/5000x5000-4_q0s4rj.png"
            alt=""
          />
        </Link>

        <span className="text-[#6ecfef] font-semibold text-2xl md:hidden block">
          L.
        </span>
      </div>):(<><div className="w-full flex items-center justify-center p-3 h-[70px] bg-[#fff]">

<Link to="/dashboard">
  <img
    src="https://res.cloudinary.com/landingpage2/image/upload/v1732303053/5000x5000-4_q0s4rj.png"
    alt=""
  />
</Link>


</div></>)}
      
      <div className="w-full h-[calc(100vh-70px)] border-r flex flex-col gap-4 pt-8 border-slate-300 bg-[#fff] py-5 md:px-3 px-3 relative">
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
                className={`flex  gap-2 items-center w-full rounded-lg text-slate-600 hover:bg-[#6ecfef] hover:text-white px-2 py-3 cursor-pointer}`}
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
