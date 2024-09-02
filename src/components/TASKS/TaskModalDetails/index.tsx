import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getTaskByID, updatedStatus } from "../../../api/TaskApi";
import { formatDate } from "../../../utils/utils";
import { toast } from "react-toastify";
import { TaskStatus } from "../../../@types";

export default function TaskModalDetails() {
  const params = useParams();
  const projectId = params.projectId!;
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("viewTask")!;

  const show = taskId ? true : false;

  const { data } = useQuery({
    queryKey: ["task", taskId],
    queryFn: () => getTaskByID({ projectId, taskId }),
    enabled: !!taskId,
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updatedStatus,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      queryClient.invalidateQueries({ queryKey: ["task", projectId] });
    },
  });

  const handleChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value as TaskStatus;
    const data = {
      projectId,
      taskId,
      status,
    };
    mutate(data);
    navigate(location.pathname, { replace: true });
  };

  const statusList = [
    "pending",
    "onHold",
    "inProgress",
    "underReview",
    "completed",
  ];

  if (data)
    return (
      <>
        <Transition appear show={show} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => navigate(location.pathname, { replace: true })}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/60" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                    <p className="text-sm text-slate-400">
                      Added on: {formatDate(data.createdAt)}{" "}
                    </p>
                    <p className="text-sm text-slate-400">
                      Last update: {formatDate(data.updatedAt)}{" "}
                    </p>
                    <Dialog.Title
                      as="h3"
                      className="font-black text-4xl text-blue-500 my-5"
                    >
                      {data.taskName}
                    </Dialog.Title>
                    <p className="text-lg text-slate-500 mb-2">
                      Description
                      <br />
                      {data?.description}
                    </p>
                    <p className="text-lg text-red-500 mb-2">
                      {" "}
                      Change Historic
                    </p>
                    <ul className="list-decimal">
                      {data.completedBy.map((activilog: any) => (
                        <li key={activilog._id} >
                          <span className="font-bold text-slate-600">
                            {activilog.status}:
                          </span>{" "}
                          {activilog.user.name}
                        </li>
                      ))}
                    </ul>
                    <div className="my-5 space-y-3">
                      <label className="font-bold">Actual state </label>
                      <select
                        className="w-full p-3 bg-white border border-gray-300"
                        defaultValue={data.status}
                        onChange={handleChanges}
                      >
                        {statusList.map((status) => (
                          <option value={status} className="text-left">
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
}
