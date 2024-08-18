import { useQuery } from "@tanstack/react-query";
import { Navigate, useLocation,  useParams } from "react-router-dom";
import { getTaskByID } from "../../../api/TaskApi";

import EditNewTaskModal from "../EditNewTaskModal";

const EditTaskData = () => {
  const params = useParams();
  const projectId = params.projectId!;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("editTask")!;


  const { data,isError } = useQuery({
    queryKey: ["task", taskId],
    queryFn: () => getTaskByID({ projectId, taskId }),
    enabled:!!taskId,
  });
  if(isError) return <Navigate to={'/404'} />
  if(data) return <EditNewTaskModal data={data} taskId={taskId}/>;
};

export default EditTaskData;
