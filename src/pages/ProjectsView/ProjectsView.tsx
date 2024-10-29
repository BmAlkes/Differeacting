import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { getProjects } from "../../api/ProjectAPI";
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import DeleteProjectModal from "../../components/TASKS/DeleteModalProject";
import { useAuth } from "../../hooks/useAuth";
import { isManager } from "../../utils/policies";
import { useGlobalSearchStore } from "../../store/store";



export interface ProjectsResponse {
  totalPages: number;
  projects: Project[];
}

export interface Project {
  _id: string;
  projectName: string;
  clientName: string;
  description: string;
  tasks: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  manager?: string;
  active: boolean;
}

const ProjectView = () => {
  const{value}= useGlobalSearchStore()
 
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 6;

  const { data: user, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { data: projects, isLoading } = useQuery<ProjectsResponse>({
    queryKey: ["projects", currentPage, itemsPerPage],
    queryFn: () => getProjects(currentPage, itemsPerPage),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (projects) {
      setTotalPages(projects.totalPages);
    }
  }, [projects]);

  const handlePageChange = (newPage:any) => {
    setCurrentPage(newPage);
  };
console.log(projects)

   const filteredData = projects?.projects?.filter((item:any)=> value.toLocaleLowerCase()===""? item : item.clientName.toLowerCase().includes(value) || item.projectName.toLowerCase().includes(value))

  console.log(filteredData)
  if (isLoading && authLoading)
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

  return (
    <div className="flex flex-col  max-w-screen-2xl h-full mx-auto mt-4 p-6">
      <h1 className="text-5xl font-black">Projects</h1>
      <p className="text-2xl text-gray-500 mt-5">
        Organize and Managment your Projects
      </p>
      <nav className="my-5">
        <Link
          className="bg-purple-400 hover:bg-purple-500 text-white px-10 py-3 font-bold cursor-pointer transition-colors rounded-md"
          to="/dashboard/projects/create"
        >
          New Project
        </Link>
      </nav>
      {projects?.projects.length ? (
        <>
          <ul
            role="list"
            className=" mt-10 w-full lg:grid-cols-1 grid-cols-1 grid  gap-4   "
          >
            {filteredData?.map((project) => (
              <li
                key={project._id}
                className={`flex flex-row justify-between  px-5 py-10 mb-2  bg-gray-100 shadow-2xl  ${project.active ?"":"opacity-50"} `}
              >
                <div className="flex text-left min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto space-y-2 ">
                    <div  className="flex justify-between flex-row-reverse">

                    <div>
                      {isManager(project.manager!, user._id) ? (
                        <p className="font-bold text-sm uppercase bg-indigo-50 text-indigo-500 border-2 border-indigo-500 rounded-lg inline-block py-1 px-5 mb-2">
                      Mananger
                        </p>
                      ) : (
                        <p className="font-bold text-sm uppercase bg-green-50 text-green-500 border-2 border-green-500 rounded-lg inline-block py-1 px-5 mb-2">
                        Project Collaborator
                        </p>
                      )}
                    </div>
                    <div>
                      {project?.active ? (
                       null
                      ) : (
                        <p className="font-bold text-sm uppercase bg-green-50 text-red-500 border-2 border-red-500 rounded-lg inline-block py-1 px-5 mb-2">
                          Inactive client
                        </p>
                      )}
                    </div>
                      </div>
                    <Link
                      to={`/dashboard/projects/${project._id}`}
                      className="text-black cursor-pointer hover:underline lg:text-2xl text-lg font-bold"
                    >
                      {project.projectName}
                    </Link>
                    <p className="text-lg text-gray-600">
                      Cliente: {project.clientName}
                    </p>
                    <p className="text-sm text-gray-400">
                      Description: {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-x-6">
                  <Menu as="div" className="relative flex-none">
                    <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                      <span className="sr-only">Options</span>
                      <EllipsisVerticalIcon
                        className="h-9 w-9"
                        aria-hidden="true"
                      />
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
                          <Link
                            to={`/dashboard/projects/${project._id}`}
                            className="block px-3 py-1 text-sm leading-6 text-gray-900"
                          >
                            See Project
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to={`/dashboard/projects/${project._id}/edit`}
                            className="block px-3 py-1 text-sm leading-6 text-gray-900"
                          >
                            Edit Project
                          </Link>
                        </Menu.Item>

                        {project.manager === user._id && (
                          <Menu.Item>
                            <button
                              type="button"
                              className="block px-3 py-1 text-sm leading-6 text-red-500"
                              onClick={() => {
                                navigate(
                                  location.pathname +
                                    `?deleteProject=${project._id}`
                                );
                              }}
                            >
                              Delete Project
                            </button>
                          </Menu.Item>
                        )}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </li>
            ))}
          <div className="flex justify-center my-10 gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border  rounded bg-blue-300"
            >
              Before
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 border rounded ${
                  currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded bg-slate-500"
            >
              Next
            </button>
          </div>
          </ul>
        </>
      ) : (
        <p className="text-center py-20">
          Dont have any Projects created yet
          <Link
            className="text-fuchsia-500 font-bold ml-1"
            to="/dashboard/projects/create"
          >
            Create Project
          </Link>
        </p>
      )}
      <DeleteProjectModal />
    </div>
  );
};

export default ProjectView;
