import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import ErrorMessage from "../../../components/ErrorMessage";
import { ForgotPasswordForm } from "../../../@types";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../../api/AuthApi";
import { toast } from "react-toastify";

export default function ForgotPasswordView() {
  const initialValues: ForgotPasswordForm = {
    email: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (data) => {
      toast.success(data);
      reset();
    },
    onError: (data) => {
      toast.error(data.message);
    },
  });

  const handleForgotPassword = (formData: ForgotPasswordForm) => {
    mutate(formData);
  };

  return (
    <div className=" w-full h-screen min-h-screen  ">
      <div className="bg-[#030b0e] container w-full h-full flex flex-col gap-10 items-center justify-center">
        <img
          src="https://res.cloudinary.com/landingpage2/image/upload/v1739727604/5000x5000-3-removebg-preview_qvlhb9.webp"
          alt=""
          className="w-[600px] mb-11"
        />

        <p className="text-2xl font-light text-white mt-5">
          Forgot your password
          <span
            className="text-fuchsia-500 font-bold
          "
          >
            {" "}
            ? type your email for reset a password
          </span>
        </p>

        <form
          onSubmit={handleSubmit(handleForgotPassword)}
          className="space-y-8 p-10  bg-white md:w-[500px] rounded-xl shadow-[#6fcfed] shadow-2xl"
          noValidate
        >
          <div className="flex flex-col gap-5">
            <label className="font-normal text-2xl" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Type your email"
              className="w-full p-3  border-gray-300 border rounded-md"
              {...register("email", {
                required: "El Email de registro es obligatorio",
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

          <input
            type="submit"
            value="Send Instructions"
            className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer rounded-md"
          />
        </form>

        <nav className="mt-10 flex flex-col space-y-4">
          <Link to="/login" className="text-center text-gray-300 font-normal">
            Do you already have an account? Log in
          </Link>
        </nav>
      </div>
    </div>
  );
}
