
import { ChartWelcome } from "../../components/ChartWelcome";
import { ChartProjects } from "../../components/ChartWelcome/ChartProjects";
import { ChartLeads } from "../../components/ChartWelcome/Leads";
import { useAuth } from "../../hooks/useAuth";


const Dashboard = () => {
  const {data} = useAuth()
  
  return(

    <div className=" max-w-screen-2xl  h-screen  mx-auto ">
    <h3 className="text-center md:text-3xl text-lg my-4 mx-auto mt-12">Welcome to Differeacting Dashboard <span className="block mt-4 text-[#03a9f4]">{data.name}</span></h3>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-6">
      <ChartWelcome/>
      <ChartProjects/>
      <ChartLeads/>
    </div>

  
    
  </div>
  )
};

export default Dashboard;
