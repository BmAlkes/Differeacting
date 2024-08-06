import { Project, ProjectFormData, dashboardProjectSchema } from "../@types";
import api from "../lib/axios";

export async function createProject(formData: ProjectFormData) {
  try {
    const { data } = await api.post("/projects", formData);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getProjects() {

  try {
    const { data } = await api("/projects");
    const response = dashboardProjectSchema.safeParse(data);
    if (response.success) {
      return response.data;
    }
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
    const { data } = await api.delete<string>(`/projects/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
