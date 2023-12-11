import Link from "next/link";
import React from "react";
import {
  FaChartBar,
  FaTasks,
  FaUsers,
  FaToolbox,
  FaCog,
  FaAngleRight,
} from "react-icons/fa";
import { VscChevronDown } from "react-icons/vsc";

const SideBar = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-start bg-white gap-10 h-screen text-text">
      <span className="text-3xl cursor-pointer text-accent absolute right-[-20px] top-3 w-[40px] h-[40px] rounded-full bg-white border-4 border-secondary flex items-center justify-center">
        <FaAngleRight />
      </span>

      <div className="p-2  mt-8">
        <h1 className="text-xl text-center font-bold">Logo</h1>
        <p className="text-xl mt-3">IT Support</p>
      </div>

      <div className="w-10/12 flex flex-col  items-center">
        <div className="w-11/12">
          <p className="font-[500]">Reports</p>
        </div>
        <ul className="flex flex-col gap-3 mt-4 w-9/12">
        <Link href='/dashboard'>
          <li className="mb-2 cursor-pointer flex items-center">
            <span>
              <FaChartBar className="mr-4" />
            </span>
            <p>Analytics</p>
           
          </li>
          </Link>
          <Link href='/tasks'>
          <li className="mb-2 cursor-pointer flex items-center">
           <span> <FaTasks className="mr-4" /></span> <p>Tasks</p>
            
          </li>
          </Link>
        </ul>
      </div>


      <div className="w-10/12 flex flex-col items-center">
        <div className="w-11/12">
          <p className="font-[500]">Managements</p>
        </div>
        <ul className="flex flex-col gap-3 mt-4 w-9/12">
        <Link href='/members'>
          <li className="mb-2 cursor-pointer flex items-center">
            <span><FaUsers className="mr-4" /></span> <p>Members</p>
          </li>
          </Link>
          <li className="mb-2 cursor-pointer flex items-center">
           <span> <FaToolbox className="mr-4" /> </span><p>Tools</p>
          </li>
          <li className="mb-2 cursor-pointer flex items-center">
            <span><FaCog className="mr-4" /> </span><p>Settings</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
