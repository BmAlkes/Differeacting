import { useForm } from "react-hook-form";
import { UserLoginForm } from "../../../@types";
import ErrorMessage from "../../../components/ErrorMessage";
import { useMutation } from "@tanstack/react-query";
import { autheticateUser } from "../../../api/AuthApi";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const initialValues: UserLoginForm = {
    email: "",
    password: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });
  
  const navigate = useNavigate()
  const { mutate } = useMutation({
    mutationFn: autheticateUser,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      navigate('/dashboard')

    },
  });

  const handleLogin = (formData: UserLoginForm) => {
    console.log(formData)
    mutate(formData);
  };
  return (
    <div className=" w-full h-screen min-h-screen  ">
      <div className="bg-[#030b0e] w-full h-full flex flex-col gap-10 items-center justify-center">
        <img
          src="https://res.cloudinary.com/landingpage2/image/upload/v1715794760/Logo_Horizontal_C_2_ducktr.png"
          alt=""
          className="lg:w-[600px] w-[400px] mb-11"
        />
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="space-y-8 p-10 shadow-[#6fcfed] shadow-2xl bg-white lg:w-[500px] w-[400px] h-[500px] rounded-md"
          noValidate
        >
          <div className="flex flex-col gap-5">
            <label className="font-normal text-2xl text-left">Email</label>

            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full p-3  border-gray-300 border text-left placeholder:text-left"
              {...register("email", {
                required: "Email is required",
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

          <div className="flex flex-col gap-5">
            <label className="font-normal text-2xl text-left">Password</label>

            <input
              type="password"
              placeholder="Password "
              className="w-full p-3  border-gray-300 border text-left placeholder:text-left"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </div>

          <input
            type="submit"
            value="Login Session"
            className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 rounded   text-white font-black  text-xl cursor-pointer"
          />
        </form>
        <nav className="mt-10 flex flex-col space-y-4">
          <Link to={"/auth/forgot-password"} className="text-center text-gray-300 font-normal">
          ?Forgot your password
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Login;
