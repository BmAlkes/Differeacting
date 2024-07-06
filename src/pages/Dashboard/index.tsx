import client from "../../assets/costumer_6012670.png";
import projects from "../../assets/briefing_1705213.png";
import post from '../../assets/browser_792277.png'
import { Link } from "react-router-dom";

const Dashboard = () => (
  <div className=" max-w-screen-2xl  h-screen  mx-auto ">
    <h3 className="text-center text-3xl my-4">Welcome to Differeacting Dashboard</h3>
  
    <div className="grid md:grid-cols-3 grid-flow-cols-1 gap-4 items-center justify-center mt-6">
      <Link to="/dashboard/clients">
      <div className="flex flex-col gap-7 items-center justify-center md:w-72 md:h-72 w-40  bg-green-400 hover:bg-green-300 p-5 rounded-md">
        <img src={client} alt="" className="md:w-[150px] w-[80px]" />
        <h2 className="text-2xl ">Clients</h2>
      </div>
      </Link>
      <Link to="/dashboard/projects">
      <div className="flex flex-col gap-7 items-center justify-center md:w-72 md:h-72 w-40  bg-purple-400 hover:bg-purple-300 p-5 rounded-md">
        <img src={projects} alt="" className="md:w-[150px] w-[80px] " />
        <h2 className="text-2xl ">Projects</h2>
      </div>
      </Link>
      <Link to="/dashboard">
      <div className="flex flex-col gap-7 items-center justify-center md:w-72 md:h-72 w-40  bg-sky-400 hover:bg-sky-300 p-5 rounded-md">
      <img src={post} alt="" className="w-[150px] " />
      <h2 className="text-2xl ">Posts</h2>
      </div>
      </Link>

    </div>
  </div>
);

export default Dashboard;
