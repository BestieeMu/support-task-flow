"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "../Header/Header";
import { useSession } from "next-auth/react";
const Hero = () => {
  const { data: session } = useSession();

  return (
    <>
      <main
        className="flex w-full flex-col items-center hero-bg"
        //  style={{
        //     backgroundImage: `url(${"https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1600"})`,
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     // boxShadow:
        //     //   "inset 0 0 0 2000px rgba(0, 0, 0, 0.355)",
        //   }}
      >
        <Header />
        <div className="flex w-7/12 justify-center min-h-[600px] gap-8 flex-col items-center">
          <h1 className="text-7xl flex flex-wrap gap-4 justify-center text-[#01000A] leading-[70px] font-bold text-center">
            Manage Your{" "}
            <span className="text-[#4B4EFC]">
              <Image
                src={
                  "https://res.cloudinary.com/dmbsct2bo/image/upload/v1696330709/Component_2_iksr4g.png"
                }
                width={150}
                height={150}
                alt="inline-tag"
                className=""
              />
            </span>{" "}
            Team&apos;s{" "}
            <span className="text-[#4B4EFC] flex items-center ">
              <Image
                src={
                  "https://res.cloudinary.com/dmbsct2bo/image/upload/v1696330006/Component_1_1_bkwlud.png"
                }
                width={200}
                height={200}
                alt="inline-tag"
                className=""
              />
            </span>{" "}
            <div className="words h-20">
              <span className="text-[#0c05eb] underline word">
                Productivity
              </span>
              {/* <span className="text-yellow-500 underline word">Tasks</span>
      <span className="text-yellow-500 underline word">Performance</span>
      <span className="text-yellow-500 underline word">Efficiency</span>
      <span className="text-yellow-500 underline word">Effectiveness</span> */}
            </div>
          </h1>
          <p className="text-center xl:w-7/12 text-[#01000A] md:w-9/12 leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            voluptates officia est vero aut doloremque unde.
          </p>
          {session ? (
             <Link href={"/dashboard"}>
             {/* <Link href={"/profile?active=profile"}> */}
             <button className="w-[180px] h-[50px] bg-[#0A04C3] text-white rounded-full text-[16px]">
               Welcome Back!
             </button>
           </Link> 
          ) : (
            <Link href={"/sign-up"}>
              <button className="w-[180px] h-[50px] bg-[#0A04C3] text-white rounded-full text-[16px]">
                Try Now-Free!
              </button>
            </Link> // Display the "Try Now - Free" button for non-logged-in users
          )}
        </div>
      </main>
    </>
  );
};

export default Hero;
