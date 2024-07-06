import { Link } from "react-router-dom";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { useState } from "react";
import { ConfirmToken } from "../../../@types";
import { useMutation } from "@tanstack/react-query";
import { confirmAccount } from "../../../api/AuthApi";
import { toast } from "react-toastify";

const ConfirmAccountView = () => {
  const [token, setToken] = useState<ConfirmToken["token"]>("");

  const handleChange = (token: ConfirmToken["token"]) => {
    setToken(token);
  };

  const { mutate } = useMutation({
    mutationFn: confirmAccount,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
    },
  });

  const handleComplete = (token: ConfirmToken["token"]) => {
    mutate({ token });
  };
  return (
    <div className=" w-full h-screen min-h-screen  ">
      <div className="bg-[#030b0e] w-full h-full flex flex-col gap-10 items-center justify-center">
        <img
          src="https://res.cloudinary.com/landingpage2/image/upload/v1715794760/Logo_Horizontal_C_2_ducktr.png"
          alt=""
          className="w-[600px] mb-11"
        />
        <h1 className="text-5xl font-black text-white">Confirm account</h1>
        <p className="text-2xl font-light text-white mt-5">
          Enter the code you received{""}
          <span className=" text-fuchsia-500 font-bold"> by e-mail</span>
        </p>
        <form className="space-y-8 p-10 bg-white mt-10">
          <label className="font-normal text-2xl text-center block">
            Code of 6 digits
          </label>

          <div className="flex justify-center flex-row-reverse gap-5">
            <PinInput
              value={token}
              onChange={handleChange}
              onComplete={handleComplete}
            >
              <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border-2 placeholder-white" />
              <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border-2 placeholder-white" />
              <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border-2 placeholder-white" />
              <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border-2 placeholder-white" />
              <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border-2 placeholder-white" />
              <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border-2 placeholder-white" />
            </PinInput>
          </div>
        </form>

        <nav className="mt-10 flex flex-col space-y-4">
          <Link
            to="/auth/new-code"
            className="text-center text-gray-300 font-normal"
          >
            Request a new Code
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default ConfirmAccountView;
