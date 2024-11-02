import { IoSearchOutline } from "react-icons/io5";
import { Menu } from "lucide-react";
import { useGlobalSearchStore, useOpenStore } from "../../store/store";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import NotificationCenter from "./NotificationCenter";

const HeaderApp = ({
  name,
  profileImage,
}: {
  name: string;
  profileImage: string;
}) => {
  const { open, changeState } = useOpenStore();
  const { changeValue } = useGlobalSearchStore();

  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const logout = () => {
    localStorage.removeItem("Auth_Token");
    queryClient.invalidateQueries({ queryKey: ["user"] });
    navigate("/login");
  };

  return (
    <div
      className={`${
        open
          ? "w-[calc(100%-230px)] left-[230px]"
          : "w-[calc(100%-60px)] left-[60px]"
      }  fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0   border-b border-slate-300 bg-[#fff] z-10`}
    >
      <div className="flex items-center gap-3 cursor-pointer ">
        <span className="text-[#6ecfef] font-semibold  md:text-lg text-sm whitespace-nowrap mx-3">
          {name}
        </span>
        <Menu
          color="#000000"
          width={"20px"}
          height={"20px"}
          onClick={changeState}
        />
      </div>
      <div className="md:w-[800px] w-[130px] bg-gray-100 rounded-lg px-3 py-[10px] flex items-center gap-2">
        <IoSearchOutline color={"#999"} />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-100 outline-none text-[15px]"
          onChange={(e) => {
            changeValue(e.currentTarget.value);
          }}
        />
      </div>
      <div className="md:flex hidden items-center gap-4">
        <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                {profileImage ? (
                  <AvatarImage src={profileImage} />
                ) : (
                  <AvatarImage src="https://github.com/shadcn.png" />
                )}

                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link to="/dashboard/profile">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
              </Link>
              <DropdownMenuSeparator />

              <Link to="/dashboard/expanses">
                <DropdownMenuItem className="cursor-pointer ">
                  Expanses Tracker
                </DropdownMenuItem>
              </Link>
             
              <DropdownMenuSeparator className="bg-slate-400 mx-2" />
              <DropdownMenuItem onClick={logout} className="cursor-pointer ">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      
        <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
          <NotificationCenter />
        </div>
      </div>
    </div>
  );
};

export default HeaderApp;
