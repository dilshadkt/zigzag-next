"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/digital-market-agency-in-malappuram.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const Login = () => {
  const { register, watch } = useForm();
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();
  const verifyLogin = (e: any) => {
    e.preventDefault();
    setError(false);
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/verifyLogin`, watch())
      .then((res) => {
        Cookies.set("token", res.data.token);
        router.replace("/admin");
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-white h-screen py-6 sm:py-8 lg:py-12 ">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 flex h-full items-center justify-center ">
          <div className="w-full">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
              Login
            </h2>

            <form
              onSubmit={(e) => verifyLogin(e)}
              className="mx-auto max-w-lg rounded-lg border  shadow-lg"
            >
              <div className="flex flex-col gap-4 p-4 md:p-8">
                <div>
                  <label className="mb-2 inline-block  font-semibold text-sm text-gray-800 sm:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    required
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  />
                </div>

                <div>
                  <label className="mb-2 inline-block font-semibold text-sm text-gray-800 sm:text-base">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    required
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  />
                </div>
                {error && (
                  <p className="text-sm font-semibold text-red-500">
                    Invalid email or password
                  </p>
                )}
                <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
