import { useState, useEffect } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
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
import { getProjects } from "../../api/ProjectAPI";
import { useAuth } from "../../hooks/useAuth";
import { isManager } from "../../utils/policies";
import { useGlobalSearchStore } from "../../store/store";

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
  Pagination,
  PaginationContent,
 
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";

interface Project {
  _id: string;
  projectName: string;
  clientName: string;
  description: string;
  tasks: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  manager?: string;
  active: boolean;
}

interface ProjectsResponse {
  totalPages: number;
  projects: Project[];
}

const ProjectCard = ({ project, user, onDelete }: { 
  project: Project; 
  user: any;
  onDelete: (id: string) => void;
}) => {
  const navigate = useNavigate();
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
              <Badge variant="destructive">
                Inactive
              </Badge>
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
            <DropdownMenuItem onClick={() => navigate(`/dashboard/projects/${project._id}`)}>
              <Eye className="mr-2 h-4 w-4" /> View Details
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate(`/dashboard/projects/${project._id}/edit`)}>
              <Edit2 className="mr-2 h-4 w-4" /> Edit Project
            </DropdownMenuItem>
            {isProjectManager && (
              <DropdownMenuItem 
                className="text-red-600"
                onClick={() => onDelete(project._id)}
              >
                <Trash2 className="mr-2 h-4 w-4" /> Delete Project
              </DropdownMenuItem>
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
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 6;
  const { value } = useGlobalSearchStore();
  const { data: user, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();

  const { data: projectsData, isLoading } = useQuery<ProjectsResponse>({
    queryKey: ["projects", currentPage, itemsPerPage],
    queryFn: () => getProjects(currentPage, itemsPerPage),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (projectsData) {
      setTotalPages(projectsData.totalPages);
    }
  }, [projectsData]);

  const filteredProjects = projectsData?.projects?.filter(
    (project) => 
      value.toLowerCase() === "" || 
      project.clientName.toLowerCase().includes(value.toLowerCase()) ||
      project.projectName.toLowerCase().includes(value.toLowerCase())
  );

  if (isLoading || authLoading) {
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

      {filteredProjects?.length ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                user={user}
                onDelete={(id) => navigate(`${location.pathname}?deleteProject=${id}`)}
              />
            ))}
          </div>

          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  isActive={currentPage !== 1}
                />
              </PaginationItem>
              
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => setCurrentPage(index + 1)}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  isActive={currentPage !== totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      ) : (
        <Card className="text-center p-12">
          <div className="flex flex-col items-center gap-4">
            <FolderOpen className="h-12 w-12 text-gray-400" />
            <h3 className="text-lg font-semibold">No Projects Found</h3>
            <p className="text-gray-500">
              Get started by creating your first project
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
    </div>
  );
};

export default ProjectView;