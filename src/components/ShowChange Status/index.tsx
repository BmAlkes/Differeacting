import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Edit2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLeads } from "../../api/LeadApi";
import { toast } from "react-toastify";

const ChangeStatus = ({data}:any) => {
    const [status, setStatus] =useState('')
const [open,setOpen] = useState(false)

const queryClient = useQueryClient();
const { mutate:ChangeStatus } = useMutation({
    mutationFn: updateLeads,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success('Update leads');
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
const handleChangeStatus = (id:any) => {
    const formData={
        status
    }
    console.log(id)
    ChangeStatus({formData, id} )
    setOpen(false)
  }
  return (
    <>
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
        <Button className="bg-green-400 z-0">
          <Edit2 size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] z-50">
        <DialogHeader>
          <DialogTitle>Edit Status</DialogTitle>
          <DialogDescription>Make changes to the status.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="items-center gap-4">
            <label
              htmlFor="Title"
              className="block mb-2 text-lg font-medium  dark:text-white"
              >
              Status
            </label>
            <select
              id="Status"
              defaultValue=""
              value={data.status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full h-12 px-3 text-left outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
              >
              <option value="" disabled>
                Status
              </option>
              <option value="new" className="bg-green-500">
                New
              </option>
              <option value="In contact" className="bg-green-300">
                In Contact
              </option>
              <option value="convert" className="bg-yellow-300">
                Convert
              </option>
              <option value="lost" className="bg-red-300">
                Lost
              </option>
            </select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => handleChangeStatus(data._id)}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
                </>
  );
};

export default ChangeStatus;
