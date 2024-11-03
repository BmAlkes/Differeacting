import { useQuery } from "@tanstack/react-query";
import {  useNavigate, useParams } from "react-router-dom";
import { getProjectsById } from "../../api/ProjectAPI";
import AddTaskModal from "../../components/TASKS/taskModal/addTaskModal";
import TaskList from "../../components/TASKS/TaskList";
import EditTaskData from "../../components/TASKS/EditTaskData";
import TaskModalDetails from "../../components/TASKS/TaskModalDetails";
import { useAuth } from "../../hooks/useAuth";
import { isManager } from "../../utils/policies";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { ChevronRight, Clock, Plus,  Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

const ProjectDetails = () => {
  const { data: user} = useAuth();
  const params = useParams();
  const projectId = params.projectId!;
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProjectsById(projectId),
    retry: 2,
  });


  const isProjectManager = isManager(user._id, data?.manager);
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
  if (data && user)
    return (
      <div className="max-w-7xl mx-auto p-6">
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/projects">Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink >{data.projectName}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="text-3xl font-bold">
                {data.projectName}
              </CardTitle>
              <CardDescription className="text-base">
                {data.description}
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Badge 
                variant="secondary" 
                className="bg-green-100 text-green-800"
              >
                Active
              </Badge>
             
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Created {new Date(data.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {isProjectManager && (
                <Button 
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 hover:bg-purple-200"
                  onClick={() => navigate("team")}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Manage Team
                </Button>
              )}
              <Button 
                onClick={() => navigate("?newTask=true")}
                className="bg-purple-500 hover:bg-purple-600"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    
        <TaskList tasks={data.tasks} />
        <AddTaskModal />
        <EditTaskData />
        <TaskModalDetails />
      </div>
    );
};

export default ProjectDetails;
