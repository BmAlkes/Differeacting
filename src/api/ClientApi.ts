import { isAxiosError } from "axios";
import api from "../lib/axios";
import { Client, ClientForm, RegisterClient } from "../@types";

export async function CreateClient(formData: RegisterClient) {
  try {
    const { data } = await api.post("/client", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.console.error);
    }
  }
}

export async function getClients() {
  try {
    const { data } = await api.get(`/client`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.console.error);
    }
  }
}

export async function getClientById(id: Client["_id"]) {
  try {
    const { data } = await api(`/client/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteClient(id:Client['_id']) {
  try {
    const { data } = await api.delete<string>(`/client/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.console.error);
    }
  }
  
}

export type ProjectApiType = {
  formData: ClientForm;
  clientId: Client["_id"];
};
export async function updateClient({ formData, clientId }: ProjectApiType) {
  try {
    const { data } = await api.put(`/client/${clientId}`, formData);
    return data;
  } catch (error) {
    console.log(error);
  }
}
type ProjectApiTypeActive = {
formData:any
  clientId: Client["_id"];
};
export async function updateActive({ formData, clientId }: ProjectApiTypeActive) {
  try {
    const { data } = await api.put(`/client/${clientId}`, formData);
    return data;
  }  catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.console.error);
    }
  }
}