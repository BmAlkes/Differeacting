import { Link } from "react-router-dom";
import TableContent from "../../components/Table";
import { useState } from "react";

import { getLeads } from "../../api/LeadApi";
import { useQuery } from "@tanstack/react-query";
import TableforLead from "../../components/Table/TableforLead";


const Leads = () => {
  const [filter, setFilter] = useState("");

  const { data} = useQuery({
    queryKey: ["leads"],
    queryFn: () => getLeads(),
  });

  const filteredData = data?.filter((item:any)=> filter.toLocaleLowerCase() === ""
  ? item
  : item.name.toLowerCase().includes(filter) ||
    item.status.toLowerCase().includes(filter))
  return (
    <div className="flex flex-col items-end max-w-screen-2xl h-full mx-auto mt-4 p-6">
      <div className="flex md:flex-row flex-col w-full md:justify-between  items-center justify-center">
        <div className="flex flex-col ">
          <h1 className="text-5xl font-black">Leads</h1>
          <p className="text-2xl text-gray-500 mt-5 text-center">
            Organize and Managment your Leads from the site
          </p>
        </div>

      <form className="form relative my-7">
        <input
          className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md text-left"
          placeholder="Search Lead or status"
          type="text"
          onChange={(e) => setFilter(e.currentTarget.value)}
        />
        <button
          type="reset"
          className="absolute right-3 -translate-y-1/2 top-1/2 p-1"
          onClick={() => setFilter("")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </form>
      </div>
   <TableforLead data={filteredData}/>
    </div>
  );
};


export default Leads