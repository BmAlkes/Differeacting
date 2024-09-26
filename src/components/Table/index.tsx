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

const TableContent = ({ data }: ClientResponse) => {
  function createMarkup(data: string) {
    return {
      __html: data,
    };
  }
  return (
    
      <div>
        <table>
          <thead >
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
                <tr key={item.email} >
                  <td data-label="options" className="flex gap-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button className="bg-green-400">
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
                          <Button className="bg-red-400">
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
                          <Button className="bg-blue-400">
                            <IoMdMore size={18} />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Show more</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                  <td data-label="description">
                  <div dangerouslySetInnerHTML={createMarkup(item.description)}  className="truncate text-ellipsis"></div>
                  </td>
                  <td data-label="active" className="flex justify-center">
               
<ToggleSwitch name={item.clientName} active={item.active}/>

                  </td>
                  <td data-label="bankhours">{item.bankHours}</td>
                  <td data-label="email" className="text-blue-400"> <a href={`mailto:${item.email}`}>{item.email}</a></td>
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
