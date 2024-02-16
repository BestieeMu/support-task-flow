"use client";
import Header from "@/components/Header/Header";
import Form from "@/components/createOrg-form/Form";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserProfile = ({ user }) => {
  return (
    <>
      <div className="w-10/12 flex flex-col gap-20 rounded min-h-[550px] mt-20">
        <div className="w-full flex items-center justify-start gap-14">
          <div className=" bg-black text-white w-[250px] flex justify-center items-center h-[250px] rounded-[100%]">
            img
          </div>
          <div className="flex flex-col gap-3 items-start">
            <p className="text-4xl font-[600]">{user.name}</p>
            <p className="text-xl font-[500]">IT support </p>
          </div>
        </div>
        <div className="w-full  p-3">
          <form className="w-full grid grid-cols-2 gap-20">
            <label
              htmlFor=""
              className="w-full flex flex-col text-sm gap-3   rounded"
            >
              User Name
              <input
                type="text"
                value={user.name}
                className="w-full border border-gray-400 h-12 px-2  outline-none bg-transparent"
                placeholder="name"
              />
            </label>
            <label
              htmlFor=""
              className="w-full flex flex-col text-sm gap-3   rounded"
            >
              Email
              <input
                type="text"
                value={user.email}
                className="w-full border border-gray-400 h-12 px-2  outline-none bg-transparent"
                placeholder="email"
              />
            </label>
            <label
              htmlFor=""
              className="w-full flex flex-col text-sm gap-3   rounded"
            >
              Role
              <input
                type="text"
                value={"the default value"}
                className="w-full border border-gray-400 h-12 px-2  outline-none bg-transparent"
                placeholder="role"
              />
            </label>
            <label
              htmlFor=""
              className="w-full flex flex-col text-sm gap-3   rounded"
            >
              Password
              <input
                type="text"
                value={"the default value"}
                className="w-full border border-gray-400 h-12 px-2  outline-none bg-transparent"
                placeholder="password"
              />
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

const Page = () => {
  const { data: session } = useSession();

  const searchParams = useSearchParams();


  return (
    <>
      <main>
        <p>Profile: {session?.user?.name} </p>
      </main>
    </>
  );
};

export default Page;
