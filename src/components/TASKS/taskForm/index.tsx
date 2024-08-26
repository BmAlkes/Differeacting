import { FieldErrors, UseFormRegister} from "react-hook-form";

import ErrorMessage from "../../ErrorMessage";
import { TaskFormData } from "../../../@types";



type TaskFormProps = {
  errors: FieldErrors<TaskFormData>;
  register: UseFormRegister<TaskFormData>;

};

export default function TaskForm({ errors, register, }: TaskFormProps) {


  return (
    <>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-lg" htmlFor="name">
          Task Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Task name"
          className="w-full h-12 px-3 text-left outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
          {...register("taskName", {
            required: "Task name is required",
          })}
        />
        {errors.taskName && (
          <ErrorMessage>{errors.taskName.message}</ErrorMessage>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-normal text-lg" htmlFor="description">
          Task Description
        </label>
        <textarea
          id="description"
          placeholder="Task Description"
          className="w-full h-32 px-3 outline-none text-left rounded-md bg-slate-100 border border-slate-300 text-sm"
          {...register("description", {
            required: "task description is required",
          })}
        />
        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
         
       
         
         <label className="font-normal text-lg " htmlFor="description">
          Priority
        </label>
        <select
          id="priority"
          defaultValue=""
          className="w-full h-12 px-2 outline-none text-left rounded-md bg-slate-100 border border-slate-300 text-sm"
          {...register("priority", {
            required: "Priority is required",
          })}
        >
          <option value="" disabled >Priority</option>
          <option value="low" className="bg-blue-500">Low</option>
          <option value="medium" className="bg-orange-500">Medium</option>
          <option value="high" className="bg-red-500">High</option>
        </select>
        {errors.priority && (
          <ErrorMessage>{errors.priority?.message}</ErrorMessage>
        )}
          <label className="font-normal text-lg" htmlFor="name">
          Dealine
        </label>
        <input
          type="number"
          id="deadline"
          placeholder="Deadline"
          className="w-full h-12 text-left px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
          {...register("deadline", {
            required: "Deadline is required",
          })}
        />
         {errors.deadline && (
          <ErrorMessage>{errors.deadline?.message}</ErrorMessage>
        )}
      </div>
      
      <label className="font-normal text-lg" htmlFor="name">
          Image
        </label>
      <div className="w-full flex items-center gap-4 justify-between">
        <input
          type="text"
          id="alt"
          placeholder="Image Alt"
          className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
          {...register("alt")}
        />
        <input type="file"  className="w-full"  {...register('image')}/>
        
      </div>
    </>
  );
}
