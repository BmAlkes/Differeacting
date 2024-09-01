import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TeamMember } from "../../@types";
import { addUserToProject } from "../../api/TeamApi";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

type SearchResultProps = {
  user: TeamMember;
  reset:()=>void
};

const SearchResults = ({ user,reset }: SearchResultProps) => {

  const params = useParams()
  const projectId = params.projectId!
  const navigate = useNavigate()

  const queryClient = useQueryClient()
  const {mutate} = useMutation({
    mutationFn:addUserToProject,
    onError:(error) => {
      toast.error(error.message)
    },
    onSuccess:(data) => {
      toast.success(data)
      reset()
      navigate(location.pathname, {replace:true})
      queryClient.invalidateQueries({queryKey:['projectTeam',projectId]})
    }
  })

  const handleAddUserToProject =()=>{
    const data={
      projectId,
      id:user._id
    }
    mutate(data)
  }


  return (
    <>
      <p className="mt-10 text-center font-bold"> :Result</p>
      <div className="flex flex-row-reverse justify-between items-center">
        <p>User:<span className="font-bold">{user.name}</span></p>
        <button className="text-purple-600 hover:bg-purple-100 px-10 py-3 font-bold cursor-pointer" onClick={handleAddUserToProject}>Add to Project</button>
      </div>
    </>
  );
};

export default SearchResults;
