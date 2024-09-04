import { Edit2, Trash2 } from "lucide-react";
import { IoMdMore } from "react-icons/io";
import { ClientResponse } from "../../pages/Clients";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const TableContent = ({ data }: ClientResponse) => {
  function createMarkup(data: string) {
    return {
      __html: data,
    };
  }
  return (
    <div className="space-y-2.5 mt-8 w-full">
      <form className="flex flex-row-reverse items-center gap-2">
        <span className="text-sm font-semibold">:Filters</span>
        <Input placeholder="Client name" className="h-8 w-[320px]" />
      </form>

      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">Client Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">BankHours</th>
              <th scope="col">Active</th>
              <th scope="col">Description</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => {
              return (
                <tr key={item.email}>
                  <td data-label="Client">{item.clientName}</td>
                  <td data-label="phone">{item.phone}</td>
                  <td data-label="email" className="text-blue-400"> <a href={`mailto:${item.email}`}>{item.email}</a></td>
                  <td data-label="bankhours">{item.bankHours}</td>
                  <td data-label="active" className="flex justify-center">
                    <div className="checkbox-apple">
                      <input
                        className="yep"
                        id="check-apple"
                        type="checkbox"
                        value={item.active}
                        onClick={(e) => console.log(e.currentTarget.value)}
                      />
                      <label htmlFor="check-apple"></label>
                    </div>
                  </td>
                  <td data-label="description">
                  <div dangerouslySetInnerHTML={createMarkup(item.description)}  className="truncate text-ellipsis"></div>
                  </td>
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableContent;
