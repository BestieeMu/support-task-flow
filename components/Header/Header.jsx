import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="w-full h-[70px] bg- border-b-2 border-[#110d2247] flex justify-between px-5 items-center overflow-hidden">
        <div className="flex items-center gap-20">

        <div className="flex items-center text-xl text-black font-bold w-fit">
          <Image
            src={
              "https://res.cloudinary.com/dmbsct2bo/image/upload/v1696191556/New_Project_1_flus5x.png"
            }
            width={100}
            height={100}
            alt="logo"
            />
          BotoTask
        </div>
        <div>
            <ul className="flex items-center text-[16px]  font-normal text-black gap-10">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Organizations</li>
            </ul>
        </div>
            </div>
       
        <div>
            <button className="w-32 h-10 rounded text-[16px] bg-white">Get Started</button>
        </div>
      </nav>
    </>
  );
};

export default Header;
