import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Task, TaskStatus } from "../../../@types";
import DropTask from "../DropTask";
import TaskCard from "../TaskCard";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { updatedStatus } from "../../../api/TaskApi";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

type TaskListProps = {
  tasks: Task[];
};
type GroupTask = {
  [key: string]: Task[];
};
const initialStatusGroup: GroupTask = {
  pending: [],
  onHold: [],
  inProgress: [],
  underReview: [],
  completed: [],
};

const TaskList = ({ tasks }: TaskListProps) => {
  const params = useParams();
  const projectId = params.projectId!;

  const groupedTasks = tasks.reduce((acc, task) => {
    let currentGroup = acc[task.status] ? [...acc[task.status]] : [];
    currentGroup = [...currentGroup, task];
    return { ...acc, [task.status]: currentGroup };
  }, initialStatusGroup);

  const queryClient = useQueryClient()
  const {mutate} = useMutation({
    mutationFn:updatedStatus,
    onError:(error) => {
        toast.error(error.message)
    },
    onSuccess:(data) => {
        toast.success(data)
        queryClient.invalidateQueries({queryKey:['project',projectId]})
    },
    },
  )
  const statusColor: { [key: string]: string } = {
    pending: "border-t-slate-500",
    onHold: "border-t-red-500",
    inProgress: "border-t-blue-500",
    underReview: "border-t-amber-500",
    completed: "border-t-emerald-500",
  };

  const handleDragEnd = (e: DragEndEvent) => {
    const { over, active } = e;
    if (over && over.id) {
    const taskId = active.id.toString()
    const status  =over.id as TaskStatus

    mutate({projectId,taskId,status})
    }
  };

  return (
    <>
      <h2 className="text-5xl font-black my-10 text-left">Tasks</h2>

      <div className="flex gap-5 overflow-x-scroll 2xl:overflow-auto pb-32 w-full flex-row-reverse">
        <DndContext onDragEnd={handleDragEnd}>
          {Object.entries(groupedTasks).map(([status, tasks]) => (
            <div
              key={status}
              className="min-w-[350px] 2xl:min-w-[350px] 2xl:w-1/5 "
            >
              <h3
                className={`text-center capitalize text-xl font-light border border-slate-300 rounded-t-lg bg-white p-3 border-t-8 ${statusColor[status]}`}
              >
                {status}
              </h3>
              <DropTask status={status} />
              <ul className="mt-5 space-y-5 flex justify-center items-center flex-col">
                {tasks.length === 0 ? (
                  <li className="text-gray-500 text-center pt-3">
                    Dont Have any tasks
                  </li>
                ) : (
                  tasks.map((task) => (
                    <>
                      <TaskCard key={task._id} task={task} />
                    </>
                  ))
                )}
              </ul>
            </div>
          ))}
        </DndContext>
      </div>
    </>
  );
};

export default TaskList;
