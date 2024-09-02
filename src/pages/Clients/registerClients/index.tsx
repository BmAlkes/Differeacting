import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Client} from "../../../@types";
import ErrorMessage from "../../../components/ErrorMessage";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect} from "react";
import { useMutation } from "@tanstack/react-query";
import { CreateClient } from "../../../api/ClientApi";
import { toast } from "react-toastify";

const RegisterClients = () => {
  const initialValue: Client = {
    clientName: "",
    phone: "",
    description:"",
    email: "",
    bankHours: "",
    active: false,
  };
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: initialValue });

  const onEditorStateChange = (editorState:any) => {
    setValue("description", editorState);
  };

const {mutate} = useMutation({
    mutationFn:CreateClient,
    onError: (error) => {
        toast.error(error.message)
    },
    onSuccess: () => {
      navigate("/dashboard/clients");
      toast.success("Client Register successfully")
       reset();
    },
})
useEffect(() => {
    register("description", { required: true, minLength: 15 });
  }, [register]);

  const handleForm = (data:Client) => {
  
  mutate(data)
 
  };
  const editorContent = watch("description");
  return (
    <div className="flex flex-col items-end mt-10 max-w-screen-2xl mx-auto">
      <h1 className="text-5xl font-black">Register Clients</h1>
      <p className="text-2xl text-gray-500 mt-5">
        .Fill the next form to register clients
      </p>
      <nav className="my-5">
        <Link
          className="bg-purple-400 hover:bg-purple-500 text-white px-10 py-3 font-bold cursor-pointer transition-colors rounded-md"
          to="/dashboard/clients"
        >
          Back to Clients
        </Link>
      </nav>
      <form
        className="mt-10 bg-white shadow-2xl p-10 rounded-lg w-full"
        onSubmit={handleSubmit(handleForm)}
        noValidate
      >
         <div className="mb-5 space-y-3 flex flex-col items-end">
        <label htmlFor="projectName" className="text-sm uppercase font-bold">
         Client Name
        </label>
        <input
          id="projectName"
          className="w-full p-3  border border-gray-200 placeholder:text-end text-end"
          type="text"
          placeholder="Client"
          {...register("clientName", {
            required: "Client Name is Required",
          })}
        />

        {errors.clientName && (
          <ErrorMessage>{errors.clientName.message}</ErrorMessage>
        )}
      </div>
      <div className="mb-5 space-y-3 flex flex-col items-end">
        <label htmlFor="projectName" className="text-sm uppercase font-bold">
         Email
        </label>
        <input
          id="projectName"
          className="w-full p-3  border border-gray-200 placeholder:text-end text-end"
          type="text"
          placeholder="Client email"
          {...register("email", {
            required: "Email is Required",
          })}
        />

        {errors.email && (
          <ErrorMessage>{errors.email.message}</ErrorMessage>
        )}
      </div>
         <div className="mb-5 space-y-3 flex flex-col items-end">
        <label htmlFor="projectName" className="text-sm uppercase font-bold">
          Phone
        </label>
        <input
          id="projectName"
          className="w-full p-3  border border-gray-200 placeholder:text-end text-end"
          type="text"
          placeholder="Phone"
          {...register("phone", {
            required: "Phone is Required",
          })}
        />

        {errors.phone && (
          <ErrorMessage>{errors.phone.message}</ErrorMessage>
        )}
      </div>

      <div className="mb-5 space-y-3 flex flex-col items-end">
        <label htmlFor="projectName" className="text-sm uppercase font-bold">
         Bank Hours
        </label>
        <input
          id="projectName"
          className="w-full p-3  border border-gray-200 placeholder:text-end text-end"
          type="text"
          placeholder="Bank Hours"
          {...register("bankHours", {
          })}
        />

        {errors.bankHours && (
          <ErrorMessage>{errors.bankHours.message}</ErrorMessage>
        )}
      </div>
      <div className="mb-5 space-y-3 flex flex-col items-end">
        <label htmlFor="projectName" className="text-sm uppercase font-bold">
         Description
        </label>
       <ReactQuill  className="w-full " theme="snow"  value={editorContent}
        onChange={onEditorStateChange}/>
      </div>
      
        <input
          type="submit"
          value="Create Project"
          className="bg-purple-400 w-full p-3 text-white uppercase font-bold hover:bg-purple-600 transition-colors cursor-pointer"
        />
      </form>
    </div>
  );
};

export default RegisterClients;
