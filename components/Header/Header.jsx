"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [dropProfile, setDropProfile] = useState(false);
  const { data: session } = useSession();
console.log(session);
  return (
    <>
      <nav className="w-full h-[70px] bg- border-b-2 border-[#110d2247] flex justify-between px-5 items-center ">
        <div className="flex items-center gap-20">
          <div className="flex items-center text-2xl text-black font-bold w-fit pl-10">
            {/* <Image
            src={
              "https://res.cloudinary.com/dmbsct2bo/image/upload/v1696191556/New_Project_1_flus5x.png"
            }
            width={100}
            height={100}
            alt="logo"
            /> */}
            Do💪🏽it
          </div>
          <div>
            <ul className="flex items-center text-[16px]  font-normal text-black gap-10">
              <Link href={"/"}>
                <li className="cursor-pointer">Home</li>
              </Link>

              <Link href={"/departments"}>
                <li className="cursor-pointer">Departments</li>
              </Link>
            </ul>
          </div>
        </div>
        {session ? (
          <div
            className="relative bg-white/90  pl-4 py-1 flex items-center gap-4 pr-4 rounded-md cursor-pointer"
            onClick={() => setDropProfile(!dropProfile)}
          >
            <div className="flex gap-2 text-1xl items-center">
              <span>
                <FiChevronDown />
              </span>
              {session?.user?.name}{" "}
            </div>
            <div className="bg-black w-[30px] h-[30px] ">g</div>

            {dropProfile && (
              <div className="absolute w-[200px] drop-shadow-md right-0 p-2 mt-36 rounded bg-white">
                <ul className="w-full flex flex-col ">
                  <Link href={"/profile?active=profile"}>
                    <li className="flex items-center gap-3 pl-5 py-2 border-b cursor-pointer hover:bg-gray-100">
                      <CgProfile />
                      Profile
                    </li>
                  </Link>
                  <li
                    className="flex items-center gap-3 pl-5  py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => signOut()}
                  >
                    <AiOutlineLogout />
                    Sign out
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Link href={'/sign-in'}>
          <button className="w-32 h-10 rounded text-[16px] bg-white">
            Get Started
          </button>
          </Link>
        )}
      </nav>
    </>
  );
};

export default Header;
