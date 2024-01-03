import Image from "next/image";
import React from "react";
import logo from "@/public/digital-market-agency-in-malappuram.png";
import { useForm } from "react-hook-form";
import axios from "axios";
interface LoginProps {
  setIsLogin: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLogin }) => {
  const { register, watch } = useForm();
  console.log(watch());
  const verifyLogin = () => {
    axios
      .post("http://localhost:8080/verifyLogin", watch())
      .then((res) => {
        localStorage.setItem("admin", "true");
        setIsLogin(false);
      })
      .catch((err) => {
        setIsLogin(true);
        console.log(err);
      });
  };

  return (
    <>
      <div className="fixed top-0 right-0 left-0 bottom-0 m-auto bg-black opacity-50 "></div>
      <div className=" fixed top-0 right-0 left-0 bottom-0 m-auto w-[25%] bg-white h-fit rounded-xl p-3">
        <div className="flex justify-center items-start ">
          <Image
            src={logo}
            alt="best digital marketing agency in malappuram"
            className="w-[180px] h-[100px] object-cover"
          />
        </div>
        <div className=" p-3 py-2 my-3">
          <div className="my-5 border rounded-xl p-3">
            <label className="font-semibold">User name :</label>
            <input
              type="text"
              {...register("username", { required: true })}
              className="pl-3 ml-2"
            />
          </div>
          <div className="my-5 border rounded-xl p-3   ">
            <label className="font-semibold">Password &nbsp;:</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="pl-3 ml-2"
            />
          </div>
        </div>
        <div className="flex justify-center my-3">
          <button
            onClick={() => verifyLogin()}
            className="bg-blue-500 text-white rounded-xl py-2 w-full font-medium hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
