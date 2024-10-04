import { useForm } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import { User, UserProfileForm } from "../../@types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateProfile } from "../../api/ProfileApi";
import { toast } from "react-toastify";
import { ChangeEvent, useState } from "react";

type ProfileFormProps = {
  data: User;
};

export default function ProfileForm({ data }: ProfileFormProps) {
  const [imageAvatar, setImageAvatar] = useState<UserProfileForm["image"]>();
  const [avatarUrl, setAvatarUrl] = useState<UserProfileForm["image"]>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProfileForm>({ defaultValues: data });
 const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: UpdateProfile,
    onError: (error) => toast.error(error.message),
    onSuccess: (data) => {
      toast.success(data);
      queryClient.invalidateQueries({queryKey:['user']})
    },
  });

  const handleEditProfile = (data: UserProfileForm) => {
    const formData ={
      ...data,
      image: imageAvatar,
    }
    console.log(formData);
    mutate(formData);
  };

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
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

  return (
    <>
      <div className="mx-auto max-w-3xl g">
        <h1 className="text-5xl font-black  text-left">My Account</h1>
        <p className="text-2xl font-light text-gray-500 mt-5 text-left">
          you can edit your profile information
        </p>

        <form
          onSubmit={handleSubmit(handleEditProfile)}
          className=" mt-14 space-y-5   bg-white shadow-lg p-10 rounded-l"
          noValidate
        >
          <div className="mb-5 space-y-3 flex flex-col  ">
            <label
              className="text-sm uppercase font-bold text-left"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full p-3  border border-gray-200 text-left"
              {...register("name", {
                required: "Nombre de usuario es obligatoro",
              })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>

          <div className="mb-5 space-y-3 flex flex-col">
            <label
              className="text-sm uppercase font-bold text-left"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full p-3  border border-gray-200 text-left"
              {...register("email", {
                required: "EL e-mail es obligatorio",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "E-mail no válido",
                },
              })}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </div>
          <div className="mb-5 space-y-3 flex flex-col">
            <label
              className="text-sm uppercase font-bold text-left"
              htmlFor="email"
            >
             Profile Image
            </label>
            <input
                      className="w-full h-12 px-3 text-left outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
                      id="file_input"
                      type="file"
                      onChange={(e) => handleFile(e)}
                      />
          
          </div>
          {avatarUrl && <img src={avatarUrl} className=" object-contain" />}
          <input
            type="submit"
            value="Save Changes"
            className="bg-fuchsia-600 w-full p-3 text-white uppercase font-bold hover:bg-fuchsia-700 cursor-pointer transition-colors"
          />
        </form>
      </div>
    </>
  );
}
