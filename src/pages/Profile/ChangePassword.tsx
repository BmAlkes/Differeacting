import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage";
import { UpdateCurrentPasswordForm } from "../../@types";
import { useMutation } from "@tanstack/react-query";
import { changePassword } from "../../api/ProfileApi";
import { toast } from "react-toastify";

export default function ChangePasswordView() {
  const initialValues:UpdateCurrentPasswordForm = {
    current_password: "",
    password: "",
    password_confirmation: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const password = watch("password");

  const {mutate} = useMutation({
    mutationFn: changePassword,
    onSuccess:(data)=>toast.success(data),
    onError:(error)=>toast.error(error.message)
  })

  const handleChangePassword = (formData:UpdateCurrentPasswordForm) => {
    mutate(formData)
  };

  return (
    <>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-5xl font-black text-left ">Change Password</h1>
        <p className="text-2xl font-light text-gray-500 mt-5 text-left">
        Use this form to change your password
        </p>

        <form
          onSubmit={handleSubmit(handleChangePassword)}
          className=" mt-14 space-y-5  bg-white shadow-lg p-10 rounded-lg"
          noValidate
        >
          <div className="mb-5 space-y-3 flex flex-col justify-end">
            <label
              className="text-sm uppercase font-bold  text-left"
              htmlFor="current_password"
            >
             Current Password
            </label>
            <input
              id="current_password"
              type="password"
              placeholder="Current Password"
              className="w-full p-3  border border-gray-200 text-left"
              {...register("current_password", {
                required: "The current password is required",
              })}
            />
            {errors.current_password && (
              <ErrorMessage>{errors.current_password.message}</ErrorMessage>
            )}
          </div>

          <div className="mb-5 space-y-3 flex flex-col justify-end">
            <label className="text-sm uppercase font-bold text-left" htmlFor="password">
            New Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="New Password"
              className="w-full p-3  border border-gray-200 text-left"
              {...register("password", {
                required: "New Password is required",
                minLength: {
                  value: 8,
                  message: "The password must be at least 8 characters",
                },
              })}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </div>
          <div className="mb-5 space-y-3 flex flex-col justify-end">
            <label
              htmlFor="password_confirmation"
              className="text-sm uppercase font-bold text-left"
            >
              Repeat Password
            </label>

            <input
              id="password_confirmation"
              type="password"
              placeholder="Repeat Password"
              className="w-full p-3  border border-gray-200 text-left"
              {...register("password_confirmation", {
                required: "This fill is required",
                validate: (value) =>
                  value === password || "The passwords dont match",
              })}
            />
            {errors.password_confirmation && (
              <ErrorMessage>
                {errors.password_confirmation.message}
              </ErrorMessage>
            )}
          </div>

          <input
            type="submit"
            value="Change  Password"
            className="bg-fuchsia-600 w-full p-3 text-white uppercase font-bold hover:bg-fuchsia-700 cursor-pointer transition-colors"
          />
        </form>
      </div>
    </>
  );
}
