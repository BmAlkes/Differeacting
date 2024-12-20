import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TaskForm from "../taskForm";
import { useForm } from "react-hook-form";
import { TaskFormData } from "../../../@types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../../../api/TaskApi";
import { toast } from "react-toastify";

export default function EditTaskModal() {
  const navigate = useNavigate();

  //   see if modal exists
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modalTask = queryParams.get("newTask");

  // Get ProjectId
  const params = useParams();
  const projectId = params.projectId!;
  const initialValue: TaskFormData = {
    taskName: "",
    description: "",
    alt: "",
    deadline: "",
    image: { filePath: "", name: "", size: "", type: "" },
    priority: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValue });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createTask,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["editProject", projectId] });
      toast.success(data);
      reset();

      navigate(location.pathname, { replace: true });
    },
  });
  const handleCreateTask = (formData: TaskFormData) => {
    const data = {
      formData,
      projectId,
    };
    mutate(data);
  };

  return (
    <>
      <Transition appear show={modalTask ? true : false} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            navigate(location.pathname, { replace: true });
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                  <Dialog.Title as="h3" className="font-black text-4xl  my-5">
                    New Task
                  </Dialog.Title>

                  <p className="text-xl font-bold">
                    Fill in the form and create {""}
                    <span className="text-purple-600">a task</span>
                  </p>
                  <form
                    className="mt-10 space-y-3"
                    onSubmit={handleSubmit(handleCreateTask)}
                    noValidate
                  >
                    <TaskForm register={register} errors={errors} />
                    <input
                      type="submit"
                      value="Save Task"
                      className="bg-purple-400 hover:bg-purple-500 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors rounded"
                    />
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
