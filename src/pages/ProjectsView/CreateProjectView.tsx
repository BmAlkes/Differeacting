import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ProjectForm from "../../components/dashboardProjects/ProjectForm";
import { ProjectFormData } from "../../@types";
import { createProject } from "../../api/ProjectAPI";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

const CreateProjectView = () => {
  const navigate = useNavigate();
  const initialValue: ProjectFormData = {
    projectName: "",
    clientName: "",
    description: "",
 active:false,
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValue });

  const mutation = useMutation({
    mutationFn: createProject,
    onError: () => {},
    onSuccess: () => {
      navigate("/dashboard/projects");
      toast.success("Project created successfully"), reset();
    },
  });

  const handleForm = async (data: ProjectFormData) => {
    await mutation.mutateAsync(data);
  };

  return (
    <div className="flex flex-col items-end mt-10 max-w-screen-2xl mx-auto">
      <h1 className="text-5xl font-black">Create Project</h1>
      <p className="text-2xl text-gray-500 mt-5">
        .Fill the next form to create a project
      </p>
      <nav className="my-5">
        <Link
          className="bg-purple-400 hover:bg-purple-500 text-white px-10 py-3 font-bold cursor-pointer transition-colors rounded-md"
          to="/dashboard"
        >
          Back to Dashboard
        </Link>
      </nav>
      <form
        className="mt-10 bg-white shadow-2xl p-10 rounded-lg w-full"
        onSubmit={handleSubmit(handleForm)}
        noValidate
      >
        <ProjectForm register={register} errors={errors} />
        <input
          type="submit"
          value="Create Project"
          className="bg-purple-400 w-full p-3 text-white uppercase font-bold hover:bg-purple-600 transition-colors cursor-pointer"
        />
      </form>
    </div>
  );
};

export default CreateProjectView;
