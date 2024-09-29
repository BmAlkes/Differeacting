import { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import { ProjectFormData } from "../../@types";

type ProjectFormProps = {
  register: UseFormRegister<ProjectFormData>;
  errors: FieldErrors<ProjectFormData>;
};

export default function ProjectForm({ register, errors }: ProjectFormProps) {
  return (
    <>
      <div className="mb-5 space-y-3 flex flex-col items-end">
        <label htmlFor="projectName" className="text-sm uppercase font-bold">
          Project Name
        </label>
        <input
          id="projectName"
          className="w-full p-3  border border-gray-200 placeholder:text-end text-end"
          type="text"
          placeholder="Project Name"
          {...register("projectName", {
            required: "Title of Project is Required",
          })}
        />

        {errors.projectName && (
          <ErrorMessage>{errors.projectName.message}</ErrorMessage>
        )}
      </div>

      <div className="mb-5 space-y-3 flex flex-col items-end text-end">
        <label htmlFor="clientName" className="text-sm uppercase font-bold">
          Client Name
        </label>
        <input
          id="clientName"
          className="w-full p-3  border border-gray-200 placeholder:text-end text-end"
          type="text"
          placeholder="ClientName"
          {...register("clientName", {
            required: "Client Name is Required",
          })}
        />

        {errors.clientName && (
          <ErrorMessage>{errors.clientName.message}</ErrorMessage>
        )}
      </div>

      <div className="mb-5 space-y-3 flex flex-col items-end">
        <label
          htmlFor="description"
          className="text-sm uppercase font-bold "
        >
          Description
        </label>
        <textarea
          id="description"
          className="w-full p-3 h-[300px]  border border-gray-200 resize-none placeholder:text-end text-end"
          placeholder="Project Description"
          {...register("description", {
            required: "A brief description is mandatory",
          })}
        />

        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
      </div>
          <div className="mb-5 flex flex-row-reverse  items-center  w-full ">
            <label
              htmlFor="description"
              className="text-sm uppercase font-bold  "
            >
              Active project
            </label>
            <input
              id="active"
              type="checkbox"
              className="w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md ml-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100" 
             {...register('active')}
            />
          </div>
    </>
  );
}
