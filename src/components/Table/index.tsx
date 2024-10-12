import { Edit2, Trash2 } from "lucide-react";
import { IoMdMore } from "react-icons/io";
import { ClientResponse } from "../../pages/Clients";
import { Button } from "../ui/button";


import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import ToggleSwitch from "../toogleForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteClient } from "../../api/ClientApi";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const TableContent = ({ data }: ClientResponse) => {
  function createMarkup(data: string) {
    return {
      __html: data,
    };
  }

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteClient,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
  });

  const handleDeleteClient = (clientId: string) => {
    mutate(clientId);
  };

  const navigate =useNavigate()
  
  const handleEdit =(clientId: string) => {
    navigate(`/dashboard/clients/${clientId}/edit`)
  }
  


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Options</th>
            <th scope="col">Description</th>
            <th scope="col">Active</th>
            <th scope="col">BankHours</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Client Name</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.email}>
                <td data-label="options" className="flex gap-1">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button className="bg-green-400" onClick={()=>handleEdit(item._id)}>
                          <Edit2 size={18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Edit</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button
                          className="bg-red-400"
                          onClick={() => handleDeleteClient(item._id)}
                        >
                          <Trash2 size={18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link to={`/dashboard/clients/${item._id}`}>
                          <Button className="bg-blue-400">
                            <IoMdMore size={18} />
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Show more</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </td>
                <td data-label="description">
                  <div
                    dangerouslySetInnerHTML={createMarkup(item.description)}
                    className="overflow-hidden truncate h-12"
                  ></div>
                </td>
                <td data-label="active" className="flex justify-center">
                  <ToggleSwitch name={item.clientName} active={item.active} clientId={item._id} />
                </td>
                <td data-label="bankhours">{item.bankHours}</td>
                <td data-label="email" className="text-blue-400  break-words">
                  {" "}
                  <a href={`mailto:${item.email}`}>{item.email}</a>
                </td>
                <td data-label="phone">{item.phone}</td>
                <td data-label="Client">{item.clientName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
