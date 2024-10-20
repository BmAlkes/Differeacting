import { isAxiosError } from "axios";
import api from "../lib/axios";
import { PostRegister } from "../@types";
import { CardDataProps } from "../components/cardPosts";

export async function CreateBlog(formData: PostRegister) {
  try {
    const { data } = await api.post("/posts", formData, {
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


export async function getAllPosts(){
  try {
    const { data } = await api("/posts");
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.console.error);
    }
  }
}


export async function deletePost(id:CardDataProps['data']['_id']) {
  try {
    const { data } = await api.delete<string>(`/posts/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.console.error);
    }
  }
}

export async function getPostById(id: CardDataProps['data']['_id']) {
  try {
    const { data } = await api(`/posts/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.console.error);
    }
  }
}