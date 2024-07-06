import { useForm } from "react-hook-form";
import { UserLoginForm } from "../../../@types";
import ErrorMessage from "../../../components/ErrorMessage";


const Login = () => {

  const initialValues: UserLoginForm = {
    email: '',
    password: '',
  }
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

  const handleLogin = (formData: UserLoginForm) => { }
  return (
    <div className=" w-full h-screen min-h-screen  ">
      <div className="bg-[#030b0e] w-full h-full flex flex-col gap-10 items-center justify-center">
        <img
          src="https://res.cloudinary.com/landingpage2/image/upload/v1715794760/Logo_Horizontal_C_2_ducktr.png"
          alt="" className="w-[600px] mb-11"
        />
       <form
        onSubmit={handleSubmit(handleLogin)}
        className="space-y-8 p-10 shadow-[#6fcfed] shadow-2xl bg-white lg:w-[500px] h-[500px] rounded-md"
        noValidate
      >
        <div className="flex flex-col gap-5">
          <label
            className="font-normal text-2xl text-left"
          >Email</label>

          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full p-3  border-gray-300 border text-left placeholder:text-left"
            {...register("email", {
              required: "El Email es obligatorio",
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
          <label
            className="font-normal text-2xl text-left"
          >Password</label>

          <input
            type="password"
            placeholder="Password "
            className="w-full p-3  border-gray-300 border text-left placeholder:text-left"
            {...register("password", {
              required: "El Password es obligatorio",
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          value='Login Session'
          className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 rounded   text-white font-black  text-xl cursor-pointer"
        />
      </form>
      </div>
     
    </div>
  );
};

export default Login;
