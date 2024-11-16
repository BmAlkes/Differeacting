import { useState } from "react";
import { keepPreviousData, useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { 
  Plus, 
  MoreVertical, 
  Eye, 
  Edit2, 
  Trash2, 
  Loader2,
  FolderOpen,
  Users,
  Calendar 
} from "lucide-react";
import { getProjects, deleteProject } from "../../api/ProjectAPI";
import { useAuth } from "../../hooks/useAuth";
import { isManager } from "../../utils/policies";
import { useGlobalSearchStore } from "../../store/store";
import { toast } from "react-toastify";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Badge } from "../../components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../components/ui/alert-dialog";
import { Input } from "../../components/ui/input";

interface Project {
  _id: string;
  projectName: string;
  clientName: string;
  description: string;
  tasks: string[];
  createdAt: string;
  updatedAt: string;
  manager?: string;
  active: boolean;
}

interface ProjectsResponse {
  totalPages: number;
  projects: Project[];
  currentPage: number;
  totalItems: number;
}

const ProjectCard = ({ 
  project, 
  user, 
  onDelete 
}: { 
  project: Project; 
  user: any;
  onDelete: (id: string) => void;
}) => {
  const isProjectManager = isManager(project.manager!, user._id);

  return (
    <Card className={`${!project.active && 'opacity-60'} transition-all hover:shadow-lg`}>
      <CardHeader className="grid grid-cols-[1fr,auto] items-start gap-4 space-y-0">
        <div>
          <div className="flex gap-2 mb-2">
            {isProjectManager ? (
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                Manager
              </Badge>
            ) : (
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                Collaborator
              </Badge>
            )}
            {!project.active && (
              <Badge variant="destructive">Inactive</Badge>
            )}
          </div>
          <CardTitle className="text-xl font-bold hover:text-purple-600 transition-colors">
            <Link to={`/dashboard/projects/${project._id}`}>
              {project.projectName}
            </Link>
          </CardTitle>
          <CardDescription className="mt-2">
            <span className="font-medium text-gray-700">Client:</span> {project.clientName}
          </CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link to={`/dashboard/projects/${project._id}`}>
                <Eye className="mr-2 h-4 w-4" /> View Details
              </Link>
            </DropdownMenuItem>
            {isProjectManager && (
              <>
                <DropdownMenuItem asChild>
                  <Link to={`/dashboard/projects/${project._id}/edit`}>
                    <Edit2 className="mr-2 h-4 w-4" /> Edit Project
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => onDelete(project._id)}
                  className="text-red-600 cursor-pointer"
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Delete Project
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 line-clamp-2">
          {project.description}
        </p>
        <div className="flex gap-4 mt-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            {project.tasks.length} Tasks
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {new Date(project.updatedAt).toLocaleDateString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  
  const itemsPerPage = 6;
  const queryClient = useQueryClient();
  const { value } = useGlobalSearchStore();
  const { data: user, isLoading: authLoading } = useAuth();

  const { data: projectsData, isLoading: projectsLoading } = useQuery<ProjectsResponse>({
    queryKey: ["projects", currentPage],
    queryFn: () => getProjects(currentPage, itemsPerPage),
    placeholderData: keepPreviousData,
  });

  const deleteMutation = useMutation({
    mutationFn: (data: { projectId: string; password: string }) => 
      deleteProject(data.projectId, data.password),
    onSuccess: async () => {
      toast.success("Project deleted successfully");
      setProjectToDelete(null);
      setPassword("");
      await queryClient.invalidateQueries({ queryKey: ["projects"] });
      
      if (projectsData?.projects.length === 1 && currentPage > 1) {
        setCurrentPage(prev => prev - 1);
      }
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to delete project");
      setPassword("");
    },
  });

  const handleDelete = (id: string) => setProjectToDelete(id);

  const handleConfirmDelete = () => {
    if (projectToDelete && password) {
      deleteMutation.mutate({ projectId: projectToDelete, password });
    }
  };

  const filteredProjects = projectsData?.projects.filter(project => 
    value === "" ||
    project.projectName.toLowerCase().includes(value.toLowerCase()) ||
    project.clientName.toLowerCase().includes(value.toLowerCase())
  ) || [];

  const totalPages = projectsData?.totalPages || 1;

  if (projectsLoading || authLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 text-purple-500 animate-spin" />
          <p className="text-gray-500">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-gray-500 mt-2">
            Manage and organize your projects efficiently
          </p>
        </div>
        <Button className="bg-purple-500 hover:bg-purple-600" asChild>
          <Link to="/dashboard/projects/create">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Link>
        </Button>
      </div>

      {filteredProjects.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                user={user}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>

              {Array.from({ length: totalPages }).map((_, index) => (
                <Button
                  key={index}
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </>
      ) : (
        <Card className="text-center p-12">
          <div className="flex flex-col items-center gap-4">
            <FolderOpen className="h-12 w-12 text-gray-400" />
            <h3 className="text-lg font-semibold">No Projects Found</h3>
            <p className="text-gray-500">
              {value ? "No projects match your search" : "Get started by creating your first project"}
            </p>
            <Button className="mt-4 bg-purple-500 hover:bg-purple-600" asChild>
              <Link to="/dashboard/projects/create">
                <Plus className="mr-2 h-4 w-4" />
                Create Project
              </Link>
            </Button>
          </div>
        </Card>
      )}

      <AlertDialog
        open={!!projectToDelete}
        onOpenChange={(open) => {
          if (!open && !deleteMutation.isPending) {
            setProjectToDelete(null);
            setPassword("");
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. Please enter your password to confirm deletion.
            </AlertDialogDescription>
            <div className="mt-4">
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && password && !deleteMutation.isPending) {
                    handleConfirmDelete();
                  }
                }}
                disabled={deleteMutation.isPending}
              />
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleteMutation.isPending}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-red-500 hover:bg-red-600"
              disabled={!password || deleteMutation.isPending}
            >
              {deleteMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete Project"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProjectView;