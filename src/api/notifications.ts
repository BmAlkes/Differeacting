import { isAxiosError } from "axios";
import api from "../lib/axios";


export async function getNotification() {
    try {
      const { data } = await api.get(`/notifications`);
      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw new Error(error.response.data.console.error);
      }
    }
  }

  export async function markReadNotification(id:any){
    try {
      const {data}= await api.patch(`/notifications/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lida: true }),
      });
      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw new Error(error.response.data.console.error);
      }
    }
  }