import { isAxiosError } from "axios";
import api from "../lib/axios";
import { Client } from "../@types";

export async function CreateClient(formData: Client) {
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
