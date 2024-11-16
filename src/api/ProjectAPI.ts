import { Project, ProjectFormData } from "../@types";
import api from "../lib/axios";

export async function createProject(formData: ProjectFormData) {
  try {
    const { data } = await api.post("/projects", formData);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export const getProjects = async (page: number, limit: number) => {
  try {
    const response = await api.get(`/projects?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};
export async function getAllProjects() {
  try {
    const { data } = await api(`/projects/all`);
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getProjectsById(id: Project["_id"]) {
  try {
    const { data } = await api(`/projects/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

type ProjectApiType = {
  formData: ProjectFormData;
  projectId: Project["_id"];
};
export async function updateProjects({ formData, projectId }: ProjectApiType) {
  try {
    const { data } = await api.put(`/projects/${projectId}`, formData);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const deleteProject = async (projectId: string, password: string) => {
  const response = await api.delete(`/projects/${projectId}`, {
    data: { password }  // Enviando a senha no corpo da requisição
  });
  return response.data;
};
