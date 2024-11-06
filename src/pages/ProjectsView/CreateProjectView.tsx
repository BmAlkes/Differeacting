import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  ArrowLeft,

  FolderPlus,
  Building,
  FileText,
} from "lucide-react";

import { ProjectFormData } from "../../@types";
import { createProject } from "../../api/ProjectAPI";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Switch } from "../../components/ui/switch";

const CreateProjectView = () => {
  const navigate = useNavigate();

  const form = useForm<ProjectFormData>({
    defaultValues: {
      projectName: "",
      clientName: "",
      description: "",
      active: false,
    },
  });

  const { mutate: createProjectMutation } = useMutation({
    mutationFn: createProject,
    onError: (error: Error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Project created successfully");
      navigate("/dashboard/projects");
    },
  });

  const onSubmit = (data: ProjectFormData) => {
    createProjectMutation(data);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Create New Project</h1>
          <p className="text-gray-500 mt-2">
            Fill in the details below to create a new project
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/dashboard/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
          <CardDescription>
            Provide the basic information about your project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="projectName"
                rules={{ required: "Project name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <FolderPlus className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          {...field}
                          className="pl-9"
                          placeholder="Enter project name"
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      Choose a clear and descriptive name
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="clientName"
                rules={{ required: "Client name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          {...field}
                          className="pl-9"
                          placeholder="Enter client name"
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      Name of the client or organization
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                rules={{ required: "Description is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Textarea
                          {...field}
                          className="pl-9 min-h-[100px]"
                          placeholder="Enter project description"
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      Brief overview of the project scope and objectives
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="active"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Project Status
                      </FormLabel>
                      <FormDescription>
                        Activate the project to start tracking tasks
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="pt-4 flex justify-end">
                <Button
                  type="submit"
                  className="bg-purple-500 hover:bg-purple-600 w-full sm:w-auto"
                >
                  'Create Project'
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateProjectView;
