import { ChangeEvent, useState } from "react";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import {FiUpload } from "react-icons/fi";

const CreatePost = () => {
    const [imageAvatar, setImageAvatar] = useState();
    const [avatarUrl, setAvatarUrl] = useState();
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
        setAvatarUrl(URL.createObjectURL(e.target.files[0]));
      }

  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
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

  return (
    <div className="flex flex-col items-end max-w-screen-2xl h-full mx-auto mt-4 p-2">
      <h1 className="text-5xl font-black">Create Blog</h1>
      <p className="text-2xl text-gray-500 mt-5">Create a new blog</p>
      <nav className="my-5">
        <Link
          className="bg-purple-400 hover:bg-purple-500 text-white px-10 py-3 font-bold cursor-pointer transition-colors rounded-md"
          to="/dashboard/blog/"
        >
          Back to Blog Page
        </Link>
      </nav>

      <div className="container max-w-full my-7 bg-white ">
        <div className="flex flex-row-reverse items-center justify-start">

      <button className="border-2 w-48 rounded-lg flex items-center justify-center cursor-pointer mt-4 border-gray-600 h-32 relative">
          <div className="absolute cursor-pointer ">
            <FiUpload size={30} color="#000" />
          </div>
          <div className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="opacity-0 cursor-pointer"
              onChange={handleChange}
              />
          </div>
        </button>
        {avatarUrl && <img src={avatarUrl} className=" object-contain max-h-64" />}
              </div>
        <form className="flex flex-col p-3 mt-10 space-y-3 ">
          <div className="flex flex-col items-end ">
            <label
              htmlFor="Title"
              className="block mb-2 text-lg font-medium text-purple-500 dark:text-white"
            >
              {" "}
              Title
            </label>
            <input
              type="text"
              placeholder="Title"
              id="Title"
              className="w-full h-12 px-3 text-left outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
            />
          </div>
          <div className="flex flex-col items-end ">
            <label
              htmlFor="Title"
              className="block mb-2 text-lg font-medium text-purple-500 dark:text-white"
            >
              {" "}
              Summary
            </label>
            <input
              type="text"
              placeholder="Summary"
              onChange={handleChange}
              className="w-full h-12 px-3 text-left outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
            />
          </div>
          <div className="flex flex-col items-end" >

          <ReactQuill modules={modules} formats={formats} className="w-full min-h-44" />
          </div>
          <input
                      type="submit"
                      value="Create Post"
                      className="bg-purple-400 hover:bg-purple-500 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors rounded"
                      />
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
