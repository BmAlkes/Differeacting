import { useQuery } from "@tanstack/react-query";
import {  Link, useNavigate, useParams } from "react-router-dom";
import { getProjectsById } from "../../api/ProjectAPI";
import AddTaskModal from "../../components/TASKS/taskModal/addTaskModal";
import TaskList from "../../components/TASKS/TaskList";
import EditTaskData from "../../components/TASKS/EditTaskData";
import TaskModalDetails from "../../components/TASKS/TaskModalDetails";

const ProjectDetails = () => {
  const params = useParams();
  const projectId = params.projectId!;
  const navigate = useNavigate();


  const { data, isLoading} = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProjectsById(projectId),
    retry: 2,
  });

  if (isLoading)
    return <p className="text-center text-6xl text-purple-400">Loading...</p>;
  if (data)
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
          <Link to={'team' }     className="bg-fuchsia-700 z-0 hover:bg-fuchsia-800 px-10 py-3 text-white cursor-pointer transition-colors rounded">
          Team</Link>
        </nav>
        <TaskList tasks={data.tasks} />
        <AddTaskModal />
        <EditTaskData/>
        <TaskModalDetails/>
      </div>
    );
};

export default ProjectDetails;
