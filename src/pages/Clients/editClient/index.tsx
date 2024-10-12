import ReactQuill from "react-quill";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getClientById, updateClient } from "../../../api/ClientApi";
import { toast } from "react-toastify";
import { useEffect } from "react";

const EditClient = () => {
  const params = useParams();
  const clientId = params.clientId!
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["client"],
    queryFn: () => getClientById(clientId!),
  });

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

 

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const onEditorStateChange = (editorState: any) => {
    setValue("description", editorState);
  };


  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      clientName: data?.clientName,
      phone: data?.phone,
      description: data?.description,
      email: data?.email,
      bankHours: data?.bankHours,
      active:data?.active
    },
  });

  const QueryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateClient,
    onError: (error) => {
      toast.error(error.message);
      reset()
    },
    onSuccess: () => {
        QueryClient.invalidateQueries({ queryKey: ["client"] });
        reset()
      toast.success("data updated successfully");
      navigate("/dashboard/clients");
    
    },
});
const handleForm = (data:any) => {
    const formData = {
        ...data,
        _id:clientId
    };
    
    
    mutate({formData,clientId});
  };

  const editorContent = watch("description");

  if (isLoading)
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

 if(data) return (
    <div className="flex flex-col items-end mt-10 max-w-screen-2xl mx-auto p-3">
      <h1 className="text-5xl font-black">Edit Client</h1>
      <p className="text-2xl text-gray-500 mt-5">
        .Fill the next form to Update or change clients status
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
            {...register("bankHours")}
          />
        </div>
        <div className="mb-5 space-y-3 flex flex-col items-end">
          <label htmlFor="projectName" className="text-sm uppercase font-bold">
            Description
          </label>
          <ReactQuill
            className="w-full "
            theme="snow"
            value={editorContent}
            onChange={onEditorStateChange}
            modules={modules}
            formats={formats}
          />
        </div>

        <input
          type="submit"
          value="Register"
          className="bg-purple-400 w-full p-3 text-white uppercase font-bold hover:bg-purple-600 transition-colors cursor-pointer"
        />
      </form>
    </div>
  );
};

export default EditClient;
