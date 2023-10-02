"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    Password: "",
  });

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <main className="w-full h-screen bg-orange-500 flex items-start">
        <div
          className="w-full bg-red-500 h-full"
          style={{
            backgroundImage: `url(${"https://res.cloudinary.com/dmbsct2bo/image/upload/v1696181686/industrial-designers-working-3d-model_shx8ho.jpg"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // boxShadow:
            //   "inset 0 0 0 2000px rgba(0, 0, 0, 0.355)",
          }}
        >
          <Image
            src={
              "https://res.cloudinary.com/dmbsct2bo/image/upload/v1696191912/New_Project_2_dub5vy.png"
            }
            width={250}
            height={250}
            alt="logo"
          />
        </div>

        <div className="w-full md:w-4/12 bg-gray-100 h-full flex justify-center items-center">
          <form action="" className=" w-9/12 flex flex-col items-center gap-7">
            <div className="flex justify-start items-center w-full">
              <h2 className="text-5xl text-[#4B4EFC] font-bold">Sign Up</h2>
            </div>

            <label
              htmlFor="name"
              className="flex flex-col mt-20 items-start gap-2 text-sm w-full"
            >
              Full Name
              <input
                type="text"
                onChange={handleFormChange}
                name="fullName"
                required
                className="w-full h-12 outline-none text-[16px] px-2 border border-gray-400 rounded"
              />
            </label>
            <label
              htmlFor="email"
              className="flex flex-col items-start gap-2 text-sm w-full "
            >
              Email
              <input
                type="email"
                onChange={handleFormChange}
                name="email"
                required
                className="w-full h-12 outline-none text-[16px] px-2 border border-gray-400 rounded"
              />
            </label>
            <label
              htmlFor="password"
              className="flex flex-col items-start gap-2 text-sm w-full "
            >
              Password
              <input
                type="password"
                onChange={handleFormChange}
                name="password"
                required
                className="w-full h-12 outline-none text-[16px] px-2 border border-gray-400 rounded"
              />
            </label>
            <div className="flex justify-start items-center w-full ">
              <p>Forgot password?</p>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-[#4B4EFC] rounded text-[16px] text-white "
            >
              Sign Up
            </button>
            <div className="flex justify-start items-center w-full">
              <Link href={"/sign-in"}>
                <p className="text-1xl">
                  Not New? <span className="text-red-500">Sign Up</span>
                </p>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Page;
