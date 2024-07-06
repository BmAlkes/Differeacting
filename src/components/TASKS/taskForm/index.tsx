import { FieldErrors, UseFormRegister } from "react-hook-form";

import ErrorMessage from "../../ErrorMessage";
import { TaskFormData } from "../../../@types";

type TaskFormProps = {
  errors: FieldErrors<TaskFormData>;
  register: UseFormRegister<TaskFormData>;
};

export default function TaskForm({ errors, register }: TaskFormProps) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-2xl" htmlFor="name">
          Task Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Task name"
          className="w-full p-3  border-gray-300 border rounded text-left"
          {...register("taskName", {
            required: "Task name is required",
          })}
        />
        {errors.taskName && (
          <ErrorMessage>{errors.taskName.message}</ErrorMessage>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <label className="font-normal text-2xl" htmlFor="description">
          Task Description
        </label>
        <textarea
          id="description"
          placeholder="Task Description"
          className="w-full p-3  border-gray-300 border rounded text-left"
          {...register("description", {
            required: "task description is required",
          })}
        />
        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
