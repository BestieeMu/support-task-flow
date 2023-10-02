import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="w-full h-16 bg-[#4B4EFC] flex justify-between px-5 items-center overflow-hidden">
        <div className=" w-fit">
          <Image
            src={
              "https://res.cloudinary.com/dmbsct2bo/image/upload/v1696275317/New_Project_3_cmpewj.png"
            }
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <div>
            <ul className="flex items-center text-white gap-10">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Organizations</li>
            </ul>
        </div>
        <div>
            <button className="w-32 h-10 rounded text-[16px] bg-white">Get Started</button>
        </div>
      </nav>
    </>
  );
};

export default Header;
