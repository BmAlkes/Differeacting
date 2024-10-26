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
export async function getProjects(page: number) {
  try {
    const { data } = await api(`/projects?page=${page}`);
    return data;

  } catch (error) {
    console.log(error);
  }
}
export async function getAllProjects() {
  try {
    const { data } = await api(`/projects/all`);
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

export async function deleteProjects(id: Project["_id"]) {
  try {
    console.log(id)
    const { data } = await api.delete<string>(`/projects/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
