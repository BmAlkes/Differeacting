import React from 'react';
import { Search, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { Input } from '../../components/ui/input';

// Importe seus hooks de store
import { useOpenStore, useGlobalSearchStore } from '../../store/store';
import NotificationCenter from './NotificationCenter';

interface HeaderAppProps {
  name: string;
  profileImage: string;
}

const HeaderApp: React.FC<HeaderAppProps> = ({
  name,
  profileImage,
}) => {
  // Use os hooks diretamente dentro do componente
  const { open, changeState } = useOpenStore();
  const { changeValue } = useGlobalSearchStore();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    localStorage.removeItem("Auth_Token");
    queryClient.invalidateQueries({ queryKey: ["user"] });
    navigate("/login");
  };

  return (
    <header
      className={`
        fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 
        border-b border-slate-300 bg-white z-10
        ${open 
          ? "w-[calc(100%-230px)] left-[230px]"
          : "w-[calc(100%-60px)] left-[60px]"
        }
      `}
    >
      {/* Left Section */}
      <div className="flex items-center gap-3 cursor-pointer">
        <span className="text-[#6ecfef] font-semibold md:text-lg text-sm whitespace-nowrap mx-3">
          {name}
        </span>
        <Menu
          className="h-5 w-5 cursor-pointer"
          onClick={changeState}
        />
      </div>

      {/* Search Section */}
      <div className="md:w-[800px] w-[130px] relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Search"
          className="w-full pl-9 bg-gray-100"
          onChange={(e) => changeValue(e.target.value)}
        />
      </div>

      {/* Right Section */}
      <div className="md:flex hidden items-center gap-4">
        <div className="grid place-items-center bg-gray-100 rounded-full p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage 
                  src={profileImage || "https://github.com/shadcn.png"} 
                  alt="Profile"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link to="/dashboard/profile">
                <DropdownMenuLabel className="cursor-pointer">
                  My Account
                </DropdownMenuLabel>
              </Link>
              <DropdownMenuSeparator />
              <Link to="/dashboard/expanses">
                <DropdownMenuItem className="cursor-pointer">
                  Expanses Tracker
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator className="bg-slate-400 mx-2" />
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
          <NotificationCenter />
        </div>
      </div>
    </header>
  );
};

export default HeaderApp;