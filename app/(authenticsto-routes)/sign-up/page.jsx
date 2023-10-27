 
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
 const router = useRouter()
  // const handleFormChange = (e) => {
  //   e.preventDefault();
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !password) {
      console.log("you are missing some filed");
      return
    }
    try {
      const user_exist_res = await fetch("/api/userExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await user_exist_res.json();

      if (user) {
        alert("user already exist!");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        setLoading(false);
        setName("");
        setEmail("");
        setPassword("");
        router.replace('/sign-in')
      } else {
        console.log("registration failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="w-full h-screen  flex items-start">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${"https://img.freepik.com/free-photo/stressed-businesswoman-suffering-from-headache-work-doing-overtime-late-night_482257-2106.jpg?size=626&ext=jpg"})`,
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
          <form
            action=""
            onSubmit={handleSubmit}
            className=" w-9/12 flex flex-col items-center gap-7"
          >
            <div className="flex justify-start items-center w-full">
              <h2 className="text-5xl text-accent font-bold">Sign Up</h2>
            </div>

            <label
              htmlFor="name"
              className="flex flex-col mt-20 items-start gap-2 text-sm w-full"
            >
              Full Name
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                name="fullName"
                required
                value={name}
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
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
                value={email}
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
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                required
                value={password}
                className="w-full h-12 outline-none text-[16px] px-2 border border-gray-400 rounded"
              />
            </label>
            <div className="flex justify-start items-center w-full ">
              <p>Forgot password?</p>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-primary rounded text-[16px] text-white "
              disabled={loading}
            >
              {loading ? "loading..." : "Sign Up"}
            </button>
            <div className="flex justify-start items-center w-full">
              <Link href={"/sign-in"}>
                <p className="text-1xl">
                  Not New? <span className="text-accent">Sign In</span>
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
