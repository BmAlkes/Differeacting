import { useState } from "react"
import NewPasswordToken from "../../../components/NewPasswordToken"
import NewPasswordForm from "../../../components/NewPasswordForm"
import { ConfirmToken } from "../../../@types"


const NewPasswordView = () => {
    const [token , setToken] = useState<ConfirmToken['token']>('')
    const [isValidToken, setIsValidToken] = useState(false)
  return (
    <div className=" w-full h-screen min-h-screen  ">
      <div className="bg-[#030b0e] container w-full h-full flex flex-col gap-10 items-center justify-center">
        <img
          src="https://res.cloudinary.com/landingpage2/image/upload/v1715794760/Logo_Horizontal_C_2_ducktr.png"
          alt=""
          className="w-[600px] mb-11"
        />
          <p className="text-2xl font-light text-white mt-5">
          Reset Password
          <span className="text-fuchsia-500 font-bold
          "> ? type yout token for reset</span>
        </p>
{
    !isValidToken ?  <NewPasswordToken token={token} setToken={setToken} setIsValidToken={setIsValidToken}/> : <NewPasswordForm token={token}/>
}
        </div>
        </div>
  )
}

export default NewPasswordView