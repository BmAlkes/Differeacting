import { isAxiosError } from "axios";
import api from "../lib/axios";
import { UpdateCurrentPasswordForm, UserProfileForm } from "../@types";

export async function UpdateProfile(formData: UserProfileForm) {
  try {
    const { data } = await api.put("/auth/profile", formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
 console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.console.error);
    }
  }
}
export async function changePassword(formData: UpdateCurrentPasswordForm) {
  try {
    const { data } = await api.post<string>("/auth/update-password", formData);
 console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.console.error);
    }
  }
}
