import  { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import { ArrowLeft, Loader2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import { getClientById, updateClient } from "../../../api/ClientApi";

interface ClientFormData {
  clientName: string;
  email: string;
  phone: string;
  bankHours: number;
  description: string;
  active: boolean;
}

const QuillModules = {
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

const QuillFormats = [
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

const EditClient = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: client, isLoading } = useQuery({
    queryKey: ["client", clientId],
    queryFn: () => getClientById(clientId!),
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ClientFormData>({
    defaultValues: {
      clientName: "",
      phone: "",
      description: "",
      email: "",
      bankHours: 0,
      active: false,
    },
  });

  useEffect(() => {
    if (client) {
      reset(client);
    }
  }, [client, reset]);

  const { mutate } = useMutation({
    mutationFn: updateClient,
    onError: (error: Error) => {
      toast.error(error.message);
      reset();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["client"] });
      toast.success("Client updated successfully");
      navigate("/dashboard/clients");
    },
  });

  const onSubmit = (data: ClientFormData) => {
    mutate({ formData: { ...data, _id: clientId! }, clientId: clientId! });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
          <p className="text-gray-500">Loading client information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Edit Client</h1>
          <p className="text-gray-500 mt-2">
            Update client information and preferences
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/dashboard/clients" className="bg-purple-400 hover:bg-purple-500 flex text-white px-10 py-3 font-bold cursor-pointer transition-colors rounded-md">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Clients
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Client Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="clientName">Client Name</Label>
                <Input
                  id="clientName"
                  placeholder="Enter client name"
                  {...register("clientName", {
                    required: "Client name is required",
                  })}
                />
                {errors.clientName && (
                  <p className="text-sm text-red-500">
                    {errors.clientName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  placeholder="Enter phone number"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="bankHours">Bank Hours</Label>
                <Input
                  id="bankHours"
                  type="number"
                  placeholder="Enter bank hours"
                  {...register("bankHours", {
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <div className="prose-sm">
                <ReactQuill
                  theme="snow"
                  value={watch("description")}
                  onChange={(content) => setValue("description", content)}
                  modules={QuillModules}
                  formats={QuillFormats}
                  className="min-h-[200px] bg-white"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/dashboard/clients")}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-purple-500 hover:bg-purple-600"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Updating...
                  </>
                ) : (
                  'Update Client'
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditClient;