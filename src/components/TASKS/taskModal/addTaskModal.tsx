import { ChangeEvent, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TaskForm from "../taskForm";
import { useForm } from "react-hook-form";
import { TaskFormData } from "../../../@types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../../../api/TaskApi";
import { toast } from "react-toastify";

export default function AddTaskModal() {
  const navigate = useNavigate();
  const [imageAvatar, setImageAvatar] = useState<TaskFormData["image"]>();
  const [avatarUrl, setAvatarUrl] = useState<TaskFormData["image"]>();

  //   see if modal exists
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modalTask = queryParams.get("newTask");
  const show = modalTask ? true : false;

  // Get ProjectId
  const params = useParams();
  const projectId = params.projectId!;

  const initialValue: TaskFormData = {
    taskName: "",
    description: "",
    alt: "",
    deadline: "",
    image: undefined,
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
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      toast.success(data);
      reset();

      navigate(location.pathname, { replace: true });
    },
  });
  const handleCreateTask = (data: TaskFormData) => {
    const formData = {
      ...data,
      image: imageAvatar,
    };
    mutate({formData, projectId});
    console.log(formData);
    setImageAvatar(undefined);
    setImageAvatar(undefined);
  };

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }

    const image = e.target.files[0];

    if (!image) {
      return;
    }

    if (image.type === "image/jpeg" || image.type === "image/png") {
      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <>
      <Transition appear show={show} as={Fragment}>
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
            <div className="fixed inset-0 bg-black/60 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
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
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16 z-[1000]">
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
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="file_input"
                    >
                      Upload file
                    </label>
                    <input
                      className="w-full h-12 px-3 text-left outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
                      id="file_input"
                      type="file"
                      onChange={(e) => handleFile(e)}
                    />
                    <input
                      type="submit"
                      value="Save Task"
                      className="bg-purple-400 hover:bg-purple-500 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors rounded"
                    />
                  </form>

                  {avatarUrl && <img src={avatarUrl} />}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
