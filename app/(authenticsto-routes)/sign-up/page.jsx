"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { MainContext } from "@/context/account";


const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({})
 const router = useRouter()
 const { verifyEmail } = useContext(MainContext)
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

    let error = {}
    setError(error)
    // const emailRegex = /^(?!.*@(gmail|yahoo)\.com$)[\w-]+(\.[\w-]+)*@\w+(\.\w+)+$/;

    // Check if all fields are filled
    if (!name || !email || !password) {
      error.message = "you are missing some fields";
      setLoading(false);
      return;
    }
  
    // Check if email is a company email
    // if (!emailRegex.test(email)) {
    //   error.email ="Please use a company email";
    //   setLoading(false);
    //   return;
    // }
  
    // Check if name is at least 2 characters long
    if (name.length < 2) {
      error.name ="Name should be at least 2 characters long";
      setLoading(false);
      return;
    }
  
    // Check if password is at least 8 characters long
    if (password.length < 8) {
      error.password = "Password should be at least 8 characters long";
      setLoading(false);
      return;
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
        verifyEmail(email)
        router.replace('/email-verification')
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
            <div className="text-red-500">
              <p>{error.message}</p>
              <p>{error.name}</p>
              <p>{error.password}</p>
              <p>{error.email}</p>
            </div>
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
