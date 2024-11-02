import { useForm } from "react-hook-form";
import { FiUpload } from "react-icons/fi"
import ReactQuill from "react-quill"
import { Link, useNavigate, useParams } from "react-router-dom"
import { PostRegister } from "../../../@types";
import { ChangeEvent, useEffect, useState } from "react";
import ErrorMessage from "../../../components/ErrorMessage";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPostById, updatePost } from "../../../api/PostsApi";
import { toast } from "react-toastify";

const EditBlog = () => {
    const params = useParams();
    const blogId = params.id!
    const navigate = useNavigate();
    
    const [imageAvatar, setImageAvatar] = useState<any>();
    const [avatarUrl, setAvatarUrl] = useState<any>();

    const QueryClient = useQueryClient();
    const { data } = useQuery({
        queryKey: ["PostEdit", blogId],
        queryFn: () => getPostById(blogId),
    });

    const { mutate } = useMutation({
        mutationFn: updatePost,
        onError: (error) => {
            toast.error(error.message);
            reset();
        },
        onSuccess: (data) => {
            QueryClient.invalidateQueries({queryKey: ["PostEdit", blogId]});
            QueryClient.invalidateQueries({queryKey: ["posts"]});
            reset();
            toast.success(data);
            navigate("/dashboard/blog");
        },
    });

    const initialValue: PostRegister = {
        title: "",
        content: "",
        summary: "",
        image: undefined,
    };
    
    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm({ defaultValues: initialValue });
    
    useEffect(() => {
        if (data) {
            reset({
                title: data.title,
                content: data.content,
                summary: data.summary,
            });
            // Adicionar setagem da imagem atual
            if (data.image) {
                setAvatarUrl(data.image);
            }
        }
    }, [data, reset]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) {
            return;
        }
    
        const image = e.target.files[0];
    
        if (!image) {
            return;
        }
    
        if (image.type === "image/jpeg" || image.type === "image/png") {
            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(image));
        }
    }

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "image"],
            ["clean"],
        ],
    };
    
    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
    ];

    const editorContent = watch("content");
    
    const onEditorStateChange = (editorState: any) => {
        setValue("content", editorState);
    };

    const handleCreatePost = async (data: PostRegister) => {
        const formData = {
            ...data,
            image: imageAvatar || avatarUrl, // Use a imagem atual se não houver nova imagem
        };

        await mutate({formData, blogId});
    };

    if(!data) return <div>Loading...</div>;
if(data)  return (
    <div className="flex flex-col  max-w-screen-2xl h-full mx-auto mt-4 p-4">
    <h1 className="text-5xl font-black">Edit Blog</h1>
    <p className="text-2xl text-gray-500 mt-5">Edit the current Post</p>
    <nav className="my-5">
      <Link
        className="bg-purple-400 hover:bg-purple-500 text-white px-10 py-3 font-bold cursor-pointer transition-colors rounded-md"
        to="/dashboard/blog/" 
      >
        Back to Blog Page
      </Link>
    </nav>

    <div className="container max-w-full my-7 bg-white ">
      <div className="flex  items-center justify-start">
        <button className="border-2 w-48 rounded-lg flex items-center justify-center cursor-pointer mt-4 border-gray-600 h-32 relative">
          <div className="absolute cursor-pointer ">
            <FiUpload size={30} color="#000" />
          </div>
          <div className="cursor-pointer">
            <input
              type="file"
              className="opacity-0 cursor-pointer"
              onChange={handleChange}
            />
          </div>
        </button>
        {avatarUrl && (
          <img src={avatarUrl} className=" object-contain max-h-64" />
        )}
      </div>
      <form
        className="flex flex-col p-3 mt-10 space-y-3 "
        onSubmit={handleSubmit(handleCreatePost)}
      >
        <div className="flex flex-col  ">
          <label
            htmlFor="Title"
            className="block mb-2 text-lg font-medium text-purple-500 dark:text-white"
          >
            {" "}
            Title
          </label>
          <input
            {...register("title", { required:"Title is required"})}
            type="text"
            placeholder="Title"
            id="Title"
            className="w-full h-12 px-3 text-left outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
          />

          {errors.title && (
            <ErrorMessage>{errors.title.message}</ErrorMessage>
          )}
        </div>
        <div className="flex flex-col ">
          <label
            htmlFor="Title"
            className="block mb-2 text-lg font-medium text-purple-500 dark:text-white"
          >
            {" "}
            Summary
          </label>
          <input
            {...register("summary", { required: "summary is required"})}
            type="text"
            placeholder="Summary"
            onChange={handleChange}
            className="w-full h-12 px-3 text-left outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
          />

          {errors.summary && (
            <ErrorMessage>{errors.summary.message}</ErrorMessage>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="Title"
            className="block mb-2 text-lg font-medium text-purple-500 dark:text-white"
          >
            {" "}
            Content
          </label>
          <ReactQuill
            modules={modules}
            formats={formats}
            className="w-full min-h-44"
            value={editorContent}
            onChange={onEditorStateChange}
          />
        </div>
        <input
          type="submit"
          value="Update Post"
          className="bg-purple-400 hover:bg-purple-500 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors rounded"
        />
      </form>
    </div>
  </div>
  )
}

export default EditBlog