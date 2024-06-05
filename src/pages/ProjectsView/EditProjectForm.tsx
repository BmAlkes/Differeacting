import { Link } from "react-router-dom";
import ProjectForm from "../../components/dashboardProjects/ProjectForm";
import { useForm } from "react-hook-form";
import { ProjectFormData } from "../../@types";

type EditProjectFormProps ={
    data:ProjectFormData
}

const EditProjectForm = ({ data }:EditProjectFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: {
    projectName: data.projectName,
    clientName: data.clientName,
    description: data.description,
  }});

  const handleForm = async (data: ProjectFormData) => {
    console.log(data)
  };

  return (
    <div className="flex flex-col items-end mt-10 max-w-screen-2xl mx-auto">
      <h1 className="text-5xl font-black">Edit Project</h1>
      <p className="text-xl  text-gray-500 mt-5 mb-5">
        .Fill the next form to edit a project
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
          value="Edit Project"
          className="bg-fuchsia-600 w-full p-3 text-white uppercase font-bold hover:bg-fuchsia-700 transition-colors cursor-pointer"
        />
      </form>
    </div>
  );
};

export default EditProjectForm;
