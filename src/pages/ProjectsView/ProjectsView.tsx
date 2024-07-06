import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { deleteProjects, getProjects } from "../../api/ProjectAPI";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { toast } from "react-toastify";

const ProjectView = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  const QueryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteProjects,
    onSuccess: (data) => {
      toast.success(data);
      QueryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  if (isLoading) return "Loadding...";
    console.log(data)
  return (
    <div className="flex flex-col items-end max-w-screen-2xl mx-auto">
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
      {data?.length ? (
        <ul role="list" className=" mt-10 w-full grid-cols-2 grid  gap-4   ">
          {data.map((project) => (
            <li
              key={project._id}
              className="flex flex-row-reverse justify-between  px-5 py-10 mb-2  bg-gray-100 shadow-2xl "
            >
              <div className="flex text-left min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto space-y-2">
                  <Link
                    to={`/dashboard/projects/${project._id}`}
                    className="text-black cursor-pointer hover:underline text-3xl font-bold"
                  >
                    {project.projectName}
                  </Link>
                  <p className="text-sm text-gray-400">
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
                      <Menu.Item>
                        <button
                          type="button"
                          className="block px-3 py-1 text-sm leading-6 text-red-500"
                          onClick={() => {
                            mutate(project._id);
                          }}
                        >
                          Delete Project
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
    </div>
  );
};

export default ProjectView;
