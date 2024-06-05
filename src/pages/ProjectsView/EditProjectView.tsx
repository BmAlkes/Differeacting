import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import { getProjectsById } from "../../api/ProjectAPI";
import EditProjectForm from "./EditProjectForm";

const EditProjectView = () => {
  const params = useParams();
  const projectId = params.projectId!;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["editProject", projectId],
    queryFn: () => getProjectsById(projectId),
    retry: 2,
  });

  if (isLoading)
    return <p className="text-center text-6xl text-purple-400">Loading...</p>;
  if (isError) return <Navigate to="/404" />;

if(data) return <EditProjectForm data={data}/>;
};

export default EditProjectView;
