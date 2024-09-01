import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Task } from "../../../@types";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../../../api/TaskApi";
import { toast } from "react-toastify";
import { IoTimeOutline } from "react-icons/io5";
import { useDraggable } from "@dnd-kit/core";

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task._id,
  });
  const navigate = useNavigate();
  const params = useParams();
  const projectId = params.projectId!;

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteTask,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      toast.success(data);
    },
  });

  const { taskName, description, priority, deadline, image, alt } = task;

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px,${transform.y}px, 0)`,
        padding: "1.25rem",
        backgroundColor: "#fff",
        width: "350px",
        display: "flex",
        borderWidth: "1px",
        borderColor: "#rgb(203 213 225 /var(--tw-border-opacity)",
      }
    : undefined;
  return (
    <li className="p-5 bg-white shadow-lg shadow-black min-w-[350px] rounded-md border-slate-300  flex flex-row-reverse justify-between gap-3">
      <div
        className="w-full flex items-end flex-col gap-y-4"
        {...listeners}
        {...attributes}
        ref={setNodeRef}
        style={style}
      >
        {image && (
          <img
            src={image?.filePath}
            alt={alt}
            className=" w-full h-[200px] object-fill"
          />
        )}

        <div className="w-full flex  flex-col gap-2 max-w-[290px] ">
          <span className="text-lg uppercase text-left font-medium text-[#2f6597]">
            {taskName}
          </span>
          <p className="text-[13.5px] text-left text-gray-700 text-wrap break-words">
            {description}
          </p>
        </div>
        <div className="w-full border border-dashed"></div>

        <h2>DeadLine </h2>
        <div className="w-full flex flex-row-reverse items-center justify-between">
          <div className="flex items-center gap-1">
            <IoTimeOutline color={"#666"} width="19px" height="19px" />
            <span className="text-[16px] text-gray-700">{deadline} mins</span>
          </div>

          <div
            className={`w-[60px] rounded-full uppercase flex items-center text-xs p-3 justify-center text-white px-4 ${
              priority === "high"
                ? "bg-red-500"
                : priority === "medium"
                ? "bg-orange-500"
                : "bg-blue-500"
            }`}
          >
            {priority}
          </div>
        </div>
      </div>
      <div className="flex shrink-0  gap-x-6">
        <Menu as="div" className="relative flex-none">
          <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
            <span className="sr-only">opciones</span>
            <EllipsisVerticalIcon className="h-9 w-9" aria-hidden="true" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              <Menu.Item>
                <button
                  type="button"
                  className="block px-3 py-1 text-sm leading-6 text-gray-900 "
                  onClick={() =>
                    navigate(location.pathname + `?viewTask=${task._id}`)
                  }
                >
                  See Task
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  type="button"
                  className="block px-3 py-1 text-sm leading-6 text-gray-900"
                  onClick={() =>
                    navigate(location.pathname + `?editTask=${task._id}`)
                  }
                >
                  Edit Task
                </button>
              </Menu.Item>

              <Menu.Item>
                <button
                  type="button"
                  className="block px-3 py-1 text-sm leading-6 text-red-500"
                  onClick={() => mutate({ projectId, taskId: task._id })}
                >
                  Delete Task
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </li>
  );
};

export default TaskCard;
