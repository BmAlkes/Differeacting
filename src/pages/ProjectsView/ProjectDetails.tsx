import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProjectsById } from "../../api/ProjectAPI";
import AddTaskModal from "../../components/TASKS/taskModal/addTaskModal";
import TaskList from "../../components/TASKS/TaskList";
import EditTaskData from "../../components/TASKS/EditTaskData";
import TaskModalDetails from "../../components/TASKS/TaskModalDetails";
import { useAuth } from "../../hooks/useAuth";
import { isManager } from "../../utils/policies";

const ProjectDetails = () => {
  const { data: user} = useAuth();
  const params = useParams();
  const projectId = params.projectId!;
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProjectsById(projectId),
    retry: 2,
  });

  if (isLoading)
    return (
      <div className="flex-col gap-4 w-full h-screen flex items-center justify-center">
        <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            className="animate-ping"
          >
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
          </svg>
        </div>
      </div>
    );
  if (data && user)
    return (
      <div className="flex flex-col mt-6 pl-4 items-end  mx-auto">
        <h1 className="text-end text-3xl font-black">{data.projectName}</h1>
        <p className="text-xl font-light text-end text-gray-500 mt-5">
          {data.description}
        </p>
          <nav className="my-5 flex flex-row-reverse gap-3 justify-end">

          <button
            type="button"
            onClick={() => navigate("?newTask=true")}
            className="bg-purple-400 z-0 hover:bg-purple-500 px-10 py-3 text-white cursor-pointer transition-colors rounded"
          >
            Add task
          </button>
        {isManager(user._id, data.manager)&&(
          <Link
            to={"team"}
            className="bg-fuchsia-700 z-0 hover:bg-fuchsia-800 px-10 py-3 text-white cursor-pointer transition-colors rounded"
          >
            Team
          </Link>
        )}
        </nav>
        <TaskList tasks={data.tasks} />
        <AddTaskModal />
        <EditTaskData />
        <TaskModalDetails />
      </div>
    );
};

export default ProjectDetails;
