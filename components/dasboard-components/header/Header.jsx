import Image from "next/image";
import React from "react";

import { FiChevronDown } from "react-icons/fi";
import { VscSearch } from "react-icons/vsc";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-center bg-[#ffff] border-l-[3px] h-[80px] w-full">
        <div className="w-full flex items-center justify-between  pr-5">
          
            <div className="ml-8 w-5/12 bg-[#f3f3f3]/40 border-[1px] rounded-full px-4 gap-2 flex items-center ">
              <div className="  text-1xl">
                <VscSearch />
              </div>

              <input
                type="text"
                className="outline-none bg-transparent  text-sm  w-full h-[45px]"
                placeholder="Search"
              />
            </div>
         

          <div className="relative bg-white  pl-4 py-2 flex items-center gap-4 pr-4 rounded-md cursor-pointer">
            <div className="flex gap-2 text-1xl items-center">
              <span>
                <FiChevronDown />
              </span>
              Chidera ebuka{" "}
            </div>
            <div>
              {/* <Image src={Logo.src} width={35} height={35} alt="logo" /> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
