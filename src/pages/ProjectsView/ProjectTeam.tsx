import { Link, useNavigate, useParams } from "react-router-dom";
import AddMemberModal from "../../components/Team/addMemberModal";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProjectTeam, removeUserFromProject } from "../../api/TeamApi";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { toast } from "react-toastify";


const ProjectTeamView = () => {
  const navigate = useNavigate();
  const params = useParams();

  const projectId = params.projectId!


  const {data, isLoading} = useQuery({
    queryKey:['projectTeam',projectId],
    queryFn:()=>getProjectTeam(projectId),
    retry:false
  })

  const {mutate} = useMutation({
    mutationFn:removeUserFromProject,
    onError:(error)=>{
      toast.error(error.message)
    },
    onSuccess:(data)=>{
      toast.success(data)
    }
  })


  if (isLoading) return (
    <div className="flex-col gap-4 w-full h-screen flex items-center justify-center">
    <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" className="animate-ping">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
      </svg>
    </div>
  </div>  
  );

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


  <h2 className="text-3xl font-black my-10">Current members</h2>
  {data?.length ? (
      <ul role="list" className="divide-y divide-gray-100 border w-full border-gray-100 mt-10 bg-white shadow-lg">
          {data?.map((member) => (
              <li className="flex flex-row-reverse justify-between gap-x-6 px-5 py-10">
                  <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto space-y-2">
                          <p className="text-2xl font-black text-gray-600">
                              {member.name}
                          </p>
                          <p className="text-sm text-gray-400">
                             {member.email}
                          </p>
                      </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-x-6">
                      <Menu as="div" className="relative flex-none">
                          <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                                  <span className="sr-only">Options</span>
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
                                          type='button'
                                          className='block px-3 py-1 text-sm leading-6 text-red-500'
                                          onClick={()=>mutate({projectId,userId:member._id})}
                                      >
                                          Delete from  project
                                      </button>
                                  </Menu.Item>
                              </Menu.Items>
                          </Transition>
                      </Menu>
                  </div>
              </li>
          ))}
      </ul>
  ) : (
      <p className='text-center py-20'>There are no members in this team</p>
  )}

      <AddMemberModal/>
    </div>
  );
};

export default ProjectTeamView;
