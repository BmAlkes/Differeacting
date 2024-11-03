import { Edit2, Trash2 } from "lucide-react";
import {  Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Link } from "react-router-dom";
import { IoMdMore } from "react-icons/io";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../../api/PostsApi";
import { toast } from "react-toastify";


export interface FileData {
  name: string;
  filePath: string;
  type?: string;
  size?: string;
}
export interface CardDataProps {
  index: number;
  data:{
    _id: string;
  title: string;
  content: string;
  summary: string;
  image: FileData | null;
  terms: string[];
  createdAt: string;
  author?: {
    _id: string;
    name: string;
  };
  }
}





const CardPost = ({data, index}:CardDataProps) => {
  const QueryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deletePost,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
        QueryClient.invalidateQueries({ queryKey: ["posts"] });
   
      toast.success(data);
    
    
    },
  });
  console.log(data);
  return (
    <div
    className="w-64 h-[430px] bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden flex flex-col justify-center items-center "
  >
    <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
      <p className="absolute bottom-6 left-7 text-white text-2xl">{index + 1}</p>
    </div>
    <div className="w-full " >
     <img src={data?.image?.filePath} alt={data.image?.name}  />
    </div>
    <div className="flex flex-col items-center">

    <h1 className="font-bold text-xl">{data.title}</h1>
    <p className="text-sm text-zinc-500 leading-6  truncate w-36 overflow-hidden ">
    {data.summary}
    </p>
    </div>
    <div className="flex gap-4">
    <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link to={`/dashboard/blog/${data._id}/edit`}>
                        <Button className="bg-green-400">
                          <Edit2 size={18} />

                        </Button>
                        </Link>
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
                      onClick={()=>{mutate(data._id)}}
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
                        <Link to={`/dashboard/blog/${data._id}/details`}>
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
    </div>
  </div>
  )
}

export default CardPost