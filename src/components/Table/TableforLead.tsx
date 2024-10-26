
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLeads } from "../../api/LeadApi";
import { toast } from "react-toastify";
import {format, parseISO} from 'date-fns'

import ChangeStatus from "../ShowChange Status";




const TableforLead = ({data}:any) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: deleteLeads,
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: () => {
        toast.success('delete lead');
        queryClient.invalidateQueries({ queryKey: ["leads"] });
      },
    });
   

    const handleDeleteClient = (id: string) => {
        mutate(id);
      };
 
   
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Message</th>
            <th scope="col">Status</th>
            <th scope="col">Created</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item:any) => {
            return (
              <tr key={item.id}>
                <td data-label="name">
                  <div
                   
                    className="overflow-hidden truncate h-12"
                  >{item.name}</div>
                </td>
                
                <td data-label="email" className="text-blue-400  break-words">
                  {" "}
                  <a href={`mailto:${item.email}`}>{item.email}</a>
                </td>
                <td data-label="phone">{item.phone}</td>
                <td data-label="message">{item.message}</td>
                <td data-label="status" className={`${item.status == "new" && 'bg-green-500 text-white'} ${item.status == 'In contact' && 'bg-green-300 text-white'} ${item.status == 'convert' && 'bg-yellow-300 text-black'} ${item.status == 'lost' && 'bg-red-300 text-black'} `}>{item.status}</td>
                <td data-label="phone">{format(parseISO(item.dateOfCreation),'yyyy-MM-dd HH:mm' )}</td>
              
                <td data-label="options" className="flex justify-center gap-1">
                <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
               <ChangeStatus data={item}/>
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
                          onClick={()=>handleDeleteClient(item._id)}
                        >
                          <Trash2 size={18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete</p>
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
  )
}

export default TableforLead