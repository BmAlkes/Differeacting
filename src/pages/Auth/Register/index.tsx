import { useForm } from "react-hook-form";
import ErrorMessage from "../../../components/ErrorMessage";
import { UserRegistrationForm } from "../../../@types";
import { useMutation } from "@tanstack/react-query";
import { createAccount } from "../../../api/AuthApi";
import { toast } from "react-toastify";

export default function Register() {
  const initialValues: UserRegistrationForm = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserRegistrationForm>({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: createAccount,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      reset();
    },
  });

  const password = watch("password");

  const handleRegister = (formData: UserRegistrationForm) => {
    mutate(formData);
  };

  return (
    <div className="flex flex-col justify-end items-end">
      <h1 className="text-5xl font-black ">Create a new User</h1>
      <p className="text-2xl font-light mt-5">
        Fill the form
        <span className=" text-fuchsia-500 font-bold">
          {" "}
          for create a new user
        </span>
      </p>

      <form
        onSubmit={handleSubmit(handleRegister)}
        className="space-y-8 p-10  bg-white mt-10 w-full"
        noValidate
      >
        <div className="flex flex-col gap-5 ">
          <label className="font-normal text-2xl text-left" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full p-3  border-gray-300 border text-left placeholder:text-left"
            {...register("email", {
              required: "Email required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl text-left">Name</label>
          <input
            type="name"
            placeholder="Nombre de Registro"
            className="w-full p-3  border-gray-300 border text-left placeholder:text-left"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>

        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl text-left">Password</label>

          <input
            type="password"
            placeholder="Password de Registro"
            className="w-full p-3  border-gray-300 border text-left placeholder:text-left"
            {...register("password", {
              required: "Password required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl text-left">
            Repeat Password
          </label>

          <input
            id="password_confirmation"
            type="password"
            placeholder="Repeat password"
            className="w-full p-3  border-gray-300 border text-left placeholder:text-left"
            {...register("password_confirmation", {
              required: "Repeat Password Obligate",
              validate: (value) =>
                value === password || "The password dont matche",
            })}
          />

          {errors.password_confirmation && (
            <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          value="Register a new User"
          className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
        />
      </form>
    </div>
  );
}
