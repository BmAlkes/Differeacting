import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getClientById } from "../../../api/ClientApi";

const ClientDetails = () => {

  function createMarkup(data: string) {
    return {
      __html: data,
    };
  }
   
  const params = useParams();
  const clientId = params.clientId!;

  const { data, isLoading } = useQuery({
    queryKey: ["client", clientId],
    queryFn: () => getClientById(clientId),
    retry: 2,
  });
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
  console.log(data);

  if (data) return  <div className="flex flex-col  items-end mt-6 pl-4  mx-auto">
    <h2 className="text-4xl  text-left py-8">Client Information</h2>
    <div  className="container shadow-xl bg-white rounded-lg flex flex-col items-center gap-5">
        <h2 className="text-4xl text-center my-3 p-6">{data.clientName}</h2>
        <h2 className="text-[#707ce7]"><span className="font-semibold">Email:</span><a href={`mailto:${data.email}`}> {data.email}</a></h2>
        <h2 className="text-green-500"><span className="font-semibold ">phone: </span><a href={`tel:${data.phone}`} >{data.phone}</a></h2>
        <h2 className={`${data.active ? "text-green-500":"text-red-500"}`}><span className="text-black">Status: </span>{data.active ? "Active" :"Inactive"}</h2>
        <h2><span>bankHours:</span>{data.bankHours}</h2>

        <div className="w-full text-left">
            <span className="   font-bold text-xl">:Notes</span>
          <p  dangerouslySetInnerHTML={createMarkup(data.description)}></p>

        </div>
      
        <Link
          className="bg-purple-400 hover:bg-purple-500 flex text-white px-10 py-3 font-bold cursor-pointer transition-colors rounded-md mb-5"
          to="/dashboard/clients"
          >
   Back to Client Pages
 
        </Link>
  </div>
  </div>
};

export default ClientDetails;
