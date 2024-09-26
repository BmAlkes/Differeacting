
import { IoNotifications,  IoSearchOutline } from "react-icons/io5";
import {  Menu, Settings2Icon } from "lucide-react";
import { useOpenStore } from "../../store/store";
;

const HeaderApp = ({name}:{name:string}) => {
	const{open,changeState} = useOpenStore()

  return (
    <div className={`${open ?"w-[calc(100%-230px)] left-[230px]" :"w-[calc(100%-60px)] left-[60px]"}  fixed flex flex-row-reverse items-center justify-between pl-2 pr-6 h-[70px] top-0   border-b border-slate-300 bg-[#fff]`}>
      <div className="flex items-center gap-3 cursor-pointer ">
				
				<span className="text-[#6ecfef] font-semibold md:text-lg text-sm whitespace-nowrap mx-3">
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
				/>
			</div>
			<div className="md:flex hidden items-center gap-4">
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<IoSearchOutline color={"#444"} />
				</div>
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<Settings2Icon color={"#444"} />
				</div>
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<IoNotifications color={"#444"} />
				</div>
			</div>
		</div>
 );
      {/* <header className="bg-gray-800 py-5">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row-reverse justify-between items-center">
          <div className="w-64">
            <Link to="/dashboard">
            <img src={logo} alt="logo" />
            </Link>
          </div>
          <NavMenu />
        </div>
      </header> */}

 
};

export default HeaderApp;
