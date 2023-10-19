import Image from "next/image";
import React from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../header/logo.png";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-center bg-primary h-14 w-full">
        <div className="w-full flex items-center justify-between px-5">
          <div className=" flex items-center px-2">
            <FaBars className="mr-6" />
            <div className="font-bold">Dashboard</div>
          </div>

          <div>
            <Image src={Logo.src} width={35} height={35} alt="logo" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
