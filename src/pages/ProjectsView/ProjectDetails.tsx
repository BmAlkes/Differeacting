import { useQuery } from "@tanstack/react-query";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getProjectsById } from "../../api/ProjectAPI";
import AddTaskModal from "../../components/TASKS/taskModal/addTaskModal";
import TaskList from "../../components/TASKS/TaskList";
import EditTaskData from "../../components/TASKS/EditTaskData";
import TaskModalDetails from "../../components/TASKS/TaskModalDetails";

const ProjectDetails = () => {
  const params = useParams();
  const projectId = params.projectId!;
  const navigate = useNavigate();


  const { data, isLoading, isError } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProjectsById(projectId),
    retry: 2,
  });

  if (isLoading)
    return <p className="text-center text-6xl text-purple-400">Loading...</p>;
  if (isError) return <Navigate to="/404" />;
  if (data)
    return (
      <div className="flex flex-col mt-6 pl-4 items-end max-w-screen-2xl mx-auto">
        <h1 className="text-end text-3xl font-black">{data.projectName}</h1>
        <p className="text-xl font-light text-end text-gray-500 mt-5">
          {data.description}
        </p>
        <nav className="my-5 flex gap-3 justify-end">
          <button
            type="button"
            onClick={() => navigate("?newTask=true")}
            className="bg-purple-400 z-0 hover:bg-purple-500 px-10 py-3 text-white cursor-pointer transition-colors rounded"
          >
            Add task
          </button>
        </nav>
        <TaskList tasks={data.tasks} />
        <AddTaskModal />
        <EditTaskData/>
        <TaskModalDetails/>
      </div>
    );
};

export default ProjectDetails;
