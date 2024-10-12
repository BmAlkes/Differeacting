import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getClients } from "../../api/ClientApi";
import { ClientForm } from "../../@types";
import TableContent from "../../components/Table";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

export interface ClientResponse {
  data: ClientForm[];
}

const Clients = () => {
  const [filter, setFilter] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: () => getClients(),
  });

  const filteredData = data?.filter((item: any) =>
    filter.toLocaleLowerCase() === ""
      ? item
      : item.clientName.toLowerCase().includes(filter) ||
        item.email.toLowerCase().includes(filter)
  );


  if (isLoading)
    return (
      <div className="flex-col gap-4 w-full h-screen flex items-center justify-center">
        <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            className="animate-ping"
          >
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
          </svg>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col items-end max-w-screen-2xl h-full mx-auto mt-4 p-2">
      <div className="flex md:flex-row-reverse flex-col w-full md:justify-between  items-center justify-center">
        <div className="flex flex-col items-end">
          <h1 className="text-5xl font-black">Clients</h1>
          <p className="text-2xl text-gray-500 mt-5 text-center">
            Organize and Managment your Clients
          </p>
        </div>
        <div>
          <nav className="my-5">
            <Link
              className="bg-purple-400 hover:bg-purple-500 flex text-white px-10 py-3 font-bold cursor-pointer transition-colors rounded-md"
              to="/dashboard/clients/register"
            >
              Add Client
              <Plus />
            </Link>
          </nav>
        </div>
      </div>
      <form className="form relative my-7">
        <input
          className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md text-left"
          placeholder="Search Client Name"
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
      <TableContent data={filteredData} />
    </div>
  );
};

export default Clients;
