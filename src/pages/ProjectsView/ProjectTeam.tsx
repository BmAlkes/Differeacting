import { Link, useNavigate, useParams } from "react-router-dom";
import AddMemberModal from "../../components/Team/addMemberModal";

const ProjectTeamView = () => {
  const navigate = useNavigate();
  const params = useParams();

  const projectId = params.projectId
  return (
    <div className="flex flex-col mt-6 pl-4 items-end  mx-auto">
      <h1 className="text-end text-3xl font-black">Manage team</h1>
      <p className="text-xl font-light text-end text-gray-500 mt-5">
        manage the work team for this project
      </p>
      <nav className="my-5 flex flex-row-reverse gap-3 justify-end">
        <button
          type="button"
          onClick={() => navigate("?addMember=true")}
          className="bg-purple-400 z-0 hover:bg-purple-500 px-10 py-3 text-white cursor-pointer transition-colors rounded"
        >
          Add Team
        </button>
        <Link
          to={`/dashboard/projects/${projectId}`}
          className="bg-fuchsia-700 z-0 hover:bg-fuchsia-800 px-10 py-3 text-white cursor-pointer transition-colors rounded"
        >
          Back to Project
        </Link>
      </nav>
      <AddMemberModal/>
    </div>
  );
};

export default ProjectTeamView;
