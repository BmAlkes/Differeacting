import React from "react";
import { Edit2, Trash2, MoreHorizontal } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { Button } from "../../components/ui/button";
import ToggleSwitch from "../../components/toogleForm";
import { deleteClient } from "../../api/ClientApi";

interface Client {
  _id: string;
  clientName: string;
  email: string;
  phone: string;
  description: string;
  bankHours: number;
  active: boolean;
}

interface TableContentProps {
  data: Client[];
}

const ActionButton = ({ 
  icon: Icon, 
  onClick, 
  tooltip, 
  className 
}: { 
  icon: React.ElementType;
  onClick?: () => void;
  tooltip: string;
  className?: string;
}) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className={`p-2 hover:bg-opacity-80 ${className}`}
          onClick={onClick}
        >
          <Icon size={18} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const TableContent: React.FC<TableContentProps> = ({ data }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: deleteClientMutation } = useMutation({
    mutationFn: deleteClient,
    onError: (error: Error) => {
      toast.error(error.message);
    },
    onSuccess: (response) => {
      toast.success(response);
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
  });

  const handleEdit = (clientId: string) => {
    navigate(`/dashboard/clients/${clientId}/edit`);
  };

  const renderDescription = (description: string) => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="max-w-md overflow-hidden text-ellipsis line-clamp-2"
      />
    );
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Actions</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Bank Hours</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Client Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((client) => (
            <TableRow key={client._id}>
              <TableCell>
                <div className="flex items-center gap-1">
                  <ActionButton
                    icon={Edit2}
                    tooltip="Edit"
                    className="bg-green-400 text-white"
                    onClick={() => handleEdit(client._id)}
                  />
                  <ActionButton
                    icon={Trash2}
                    tooltip="Delete"
                    className="bg-red-400 text-white"
                    onClick={() => deleteClientMutation(client._id)}
                  />
                  <Link to={`/dashboard/clients/${client._id}`}>
                    <ActionButton
                      icon={MoreHorizontal}
                      tooltip="Show more"
                      className="bg-blue-400 text-white"
                    />
                  </Link>
                </div>
              </TableCell>
              <TableCell>{renderDescription(client.description)}</TableCell>
              <TableCell>
                <ToggleSwitch
                  name={client.clientName}
                  active={client.active}
                  clientId={client._id}
                />
              </TableCell>
              <TableCell>{client.bankHours}</TableCell>
              <TableCell className="overflow-hidden text-ellipsis text-base">
                <a 
                  href={`mailto:${client.email}`}
                  className="text-blue-500 hover:text-blue-700 transition-colors   "
                >
                  {client.email}
                </a>
              </TableCell>
              <TableCell>{client.phone}</TableCell>
              <TableCell className="font-medium text-base">{client.clientName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableContent;