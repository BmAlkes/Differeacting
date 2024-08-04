import { Grid, Home, LogOut, Newspaper, PieChart } from "lucide-react";
import { AiOutlineProfile } from "react-icons/ai";
import { FaAppStore, FaUserCog } from "react-icons/fa";
import { IoNotifications, IoPeople } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const navLinks = [
		{
			title: "Dashboard",
            link:'dashboard',
			icon: (
				<Home
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: true,
		},
		{
			title: "Clients",
            link:'dashboard/clients',
			icon: (
				<FaAppStore
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Projects",
            link:'dashboard/projects',
			icon: (
				<Grid
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Analytics",
            link:'dashboard',
			icon: (
				<PieChart
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Workflows",
            link:'dashboard',
			icon: (
				<IoPeople
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Notifications",
            link:'dashboard',
			icon: (
				<IoNotifications
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Newsletter",
            link:'dashboard',
			icon: (
				<Newspaper
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Create User",
            link:'dashboard/register',
			icon: (
				<FaUserCog
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Profile",
            link:'dashboard/profile',
			icon: (
				<AiOutlineProfile
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
	];
	return (
		<div className="fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col ">
			<div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-[#fff]">
				<span className="text-orange-400 font-semibold text-2xl md:block hidden">
                    <img src="https://res.cloudinary.com/landingpage2/image/upload/v1715794760/Logo_Horizontal_C_2_ducktr.png" alt="" />
                </span>
				<span className="text-[#6ecfef] font-semibold text-2xl md:hidden block">L.</span>
			</div>
			<div className="w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-end items-center gap-2 border-slate-300 bg-[#fff] py-5 md:px-3 px-3 relative">
				{navLinks.map((link) => {
					return (
                        <Link to={`/${link?.link}`} className="w-full">
						<div
							key={link.title}
							className={`flex w- items-center gap-2 w-full rounded-lg hover:bg-[#6ecfef] px-2 py-3 cursor-pointer ${
                                link.active ? "bg-[#6ecfef]" : "bg-transparent"
							}`}
                            >
							{link.icon}
							<span className="font-medium text-[15px] md:block hidden">{link.title}</span>
						</div>
                        </Link>
					);
				})}
				<div className="flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-[] px-2 py-3 cursor-pointer bg-gray-200">
					<LogOut/>
					<span className="font-medium text-[15px] md:block hidden">Log Out</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;