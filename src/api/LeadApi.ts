import { isAxiosError } from "axios";
import api from "../lib/axios";

export async function CreateLead(formData: any) {
  try {
    const { data } = await api.post("/leads", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.console.error);
    }
  }
}

export async function getLeads() {
  try {
    const { data } = await api.get(`/leads`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.console.error);
    }
  }
}

export async function getLeadsById(id: any) {
  try {
    const { data } = await api(`/leads/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteLeads(id: any) {
  try {
    const { data } = await api.delete<string>(`/leads/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.console.error);
    }
  }
}

export async function updateLeads({ formData, id }: any) {
  try {
    const { data } = await api.patch(`/leads/${id}`, formData);
    return data;
  } catch (error) {
    console.log(error);
  }
}
