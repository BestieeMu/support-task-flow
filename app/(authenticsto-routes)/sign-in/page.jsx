"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
    const res = await signIn("credentials", {
        email,
        password,
        redirect: false
      });

      if (res.error) {
        console.log("error occured!");
        return;
      }
      
      router.replace('/profile')
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
      <main className="w-full h-screen  flex items-start">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${"https://img.freepik.com/premium-photo/i-cant-deal-with-all-demands-shot-stressed-out-young-woman-working-demanding-career_590464-6841.jpg?size=626&ext=jpg"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // boxShadow:
            //   "inset 0 0 0 2000px rgba(0, 0, 0, 0.355)",
          }}
        >
           <Image
            src={
              "https://res.cloudinary.com/dmbsct2bo/image/upload/v1696191556/New_Project_1_flus5x.png"
            }
            width={100}
            height={100}
            alt="logo"
          />
        </div>

        <div className="w-full md:w-5/12  h-full flex justify-center items-center">
          <form action="" onSubmit={handleSubmit} className=" w-9/12 flex flex-col items-center gap-7">
            <div className="flex justify-start items-center w-full">
              <h2 className="text-5xl text-accent font-bold">Sign In</h2>
            </div>

            <label
              htmlFor="email"
              className="flex flex-col mt-20 items-start gap-2 text-sm w-full "
            >
              Email
              <input
                type="email"
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
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
                onChange={(e)=> setPassword(e.target.value)}
                value={password}
                required
                className="w-full h-12 outline-none text-[16px] px-2 border border-gray-400 rounded"
              />
            </label>
            <div className="flex justify-start items-center w-full ">
              <p>Forgot password?</p>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-primary rounded text-[16px] text-white "
            >
              Sign In
            </button>
            <div className="flex justify-start items-center w-full">
              <Link href={"/sign-up"}>
                <p className="text-1xl">
                  New Here?{" "}
                  <span className="text-accent cursor-pointer">Sign Up</span>
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
