import { ChangeEvent, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiUpload, FiX } from "react-icons/fi";
import { BiBookContent } from "react-icons/bi";
import { MdTitle, MdDescription } from "react-icons/md";
import { AiOutlineTags } from "react-icons/ai";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Select, { MultiValue } from "react-select";
import { getPostById, updatePost } from "../../../api/PostsApi";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import ErrorMessage from "../../../components/ErrorMessage";

interface TermOption {
  value: string;
  label: string;
  color?: string;
}

interface PostFormData {
  title: string;
  content: string;
  summary: string;
  terms: string[];
}

const termOptions: TermOption[] = [
  { value: "Tecnology", label: "Tecnology", color: "#61dafb" },
  { value: "Marketing", label: "Marketing", color: "#000000" },
  { value: "Design", label: "Design", color: "#ff4757" },
  { value: "Development", label: "Development", color: "#2ed573" },
];
const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image"],
    ["clean"],
  ],
};

const quillFormats = [
  "header", "bold", "italic", "underline", "strike", "blockquote",
  "list", "bullet", "indent", "link", "image",
];

const EditBlog = () => {
  const { id: blogId } = useParams<{ id: string }>();
  const navigate = useNavigate();

  
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PostFormData>({
    defaultValues: {
      title: "",
      content: "",
      summary: "",
      terms: [],
    },
  });

  // Fetch post data
  const { data: post, isLoading } = useQuery({
    queryKey: ["PostEdit", blogId],
    queryFn: () => getPostById(blogId!),
    enabled: !!blogId,
  });

  // Set form data when post is loaded
  useEffect(() => {
    if (post) {
      reset({
        title: post.title,
        content: post.content,
        summary: post.summary,
        terms: post.terms || [],
      });
      if (post.image?.filePath) {
        setImagePreview(post.image.filePath);
      }
    }
  }, [post, reset]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };
  const QueryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      toast.success("Post updated successfully!");
      QueryClient.invalidateQueries({queryKey: ["PostEdit", blogId]});
      QueryClient.invalidateQueries({queryKey: ["posts"]});
      navigate("/dashboard/blog");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (data: PostFormData) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("summary", data.summary);
    formData.append("terms", JSON.stringify(data.terms));
    
    if (imageFile) {
      formData.append("image", imageFile);
    }

    mutate({ formData, blogId: blogId! });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Edit Post
            </h1>
            <p className="text-gray-600 mt-2">Update your post content and settings</p>
          </div>
          <Link
            to="/dashboard/blog"
            className="bg-white px-6 py-2 rounded-lg shadow-sm border border-gray-200 hover:border-purple-400 transition-colors duration-200 text-gray-700 hover:text-purple-600"
          >
            Back to Blog
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  gap-6">
            {/* Image Upload Section */}
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <label className="w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-purple-400 transition-colors duration-200">
                  <FiUpload className="w-8 h-8 text-gray-400" />
                  <span className="text-sm text-gray-500 mt-2">Change Cover Image</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                    accept="image/jpeg,image/png"
                  />
                </label>
                {imagePreview && (
                  <div className="relative group">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-40 h-40 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Title Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdTitle className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                placeholder="Enter post title"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
              {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
            </div>

            {/* Summary Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdDescription className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register("summary", { required: "Summary is required" })}
                type="text"
                placeholder="Enter post summary"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
              {errors.summary && <ErrorMessage>{errors.summary.message}</ErrorMessage>}
            </div>

            {/* Terms Select */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700">
                <AiOutlineTags className="h-5 w-5" />
                Terms
              </label>
              <Controller
                name="terms"
                control={control}
                rules={{ required: "Please select at least one term" }}
                render={({ field: { onChange, value } }) => (
                  <Select
                    isMulti
                    options={termOptions}
                    value={termOptions.filter(option => value.includes(option.value))}
                    onChange={(selected: MultiValue<TermOption>) => {
                      onChange(selected.map(item => item.value));
                    }}
                    className="w-full"
                    styles={{
                      control: (base) => ({
                        ...base,
                        borderColor: '#e5e7eb',
                        '&:hover': {
                          borderColor: '#a855f7'
                        }
                      }),
                      multiValue: (base) => ({
                        ...base,
                        backgroundColor: '#f3e8ff',
                        borderRadius: '0.375rem'
                      }),
                      multiValueLabel: (base) => ({
                        ...base,
                        color: '#6b21a8'
                      })
                    }}
                  />
                )}
              />
              {errors.terms && <ErrorMessage>{errors.terms.message}</ErrorMessage>}
            </div>

            {/* Content Editor */}
            <div className="space-y-2 ">
              <label className="flex items-center gap-2 text-gray-700">
                <BiBookContent className="h-5 w-5" />
                Content
              </label>
              <Controller
                name="content"
                control={control}
                rules={{ required: "Content is required" }}
                render={({ field }) => (
                  <ReactQuill
                    {...field}
                    modules={quillModules}
                    formats={quillFormats}
                    theme="snow"
                    className="h-64 mb-12"
                  />
                )}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r mt-10 from-purple-600 to-blue-500 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-600 transition-all duration-200 disabled:opacity-50"
            >
              {isSubmitting ? "Updating..." : "Update Post"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;