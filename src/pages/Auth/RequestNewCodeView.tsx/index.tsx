import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../../components/ErrorMessage";
import { RequestConfirmationCodeForm } from "../../../@types";
// import { useMutation } from "@tanstack/react-query";
// import { requestConfirmation } from "../../../api/AuthApi";
// import { toast } from "react-toastify";

const RequestNewCodeView = () => {
  const initialValues: RequestConfirmationCodeForm = {
    email: "",
  };

  const {
    register,
    // handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  // const { mutate } = useMutation({
  //   mutationFn: requestConfirmation,
  //   onError: (error) => {
  //     toast.error(error.message);
  //   },
  //   onSuccess: (data) => {
  //     toast.success(data);
  //   },
  // });

  // const handleRequestCode = (formData: RequestConfirmationCodeForm) => {
  //   mutate(formData);
  // };

  return (
    <div className=" w-full h-screen min-h-screen  ">
      <div className="bg-[#030b0e] w-full h-full flex flex-col gap-10 items-center justify-center">
        <img
          src="https://res.cloudinary.com/landingpage2/image/upload/v1715794760/Logo_Horizontal_C_2_ducktr.png"
          alt=""
          className="w-[600px] mb-11"
        />
        <h1 className="text-5xl font-black text-white">
          Request Confirmation Code
        </h1>
        <p className="text-2xl font-light text-white mt-5">
          Insert email to receive
          <span className=" text-fuchsia-500 font-bold"> a new code</span>
        </p>

        <form
          // onSubmit={handleSubmit(handleRequestCode)}
          className="space-y-8 p-10 rounded-lg bg-white mt-10"
          noValidate
        >
          <div className="flex flex-col gap-5">
            <label className="font-normal text-2xl text-left" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Register email"
              className="w-full p-3 rounded-lg border-gray-300 border text-left "
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
            value="Send Code"
            className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer"
          />
        </form>

        <nav className="mt-10 flex  flex-col space-y-4">
          <Link to="/login" className="text-center text-gray-300 font-normal">
            Already have a account ? Start Session
          </Link>
          <Link
            to="/auth/forgot-password"
            className="text-center text-gray-300 font-normal"
          >
            Forgot your password
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default RequestNewCodeView;
