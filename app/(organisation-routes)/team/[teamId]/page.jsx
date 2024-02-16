import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { GoPlus } from "react-icons/go";

const Page = () => {
  return (
    <main className="w-full flex justify-center">
      <div className="w-[98%] ">
        {/* header section */}
        <div className="border-b border-slate-300 mt-5">
          <div className="w-full ">
            <h1 className="font-[600] text-[30px]">Team Boards</h1>
          </div>
          <div className="w-full mt-2">
            <ul className="flex items-end gap-4 ">
              <li className="py-1 hover:border-b-2 cursor-pointer border-gray-400">
                Overview
              </li>
              <li className="py-1 hover:border-b-2 cursor-pointer border-gray-400">
                Messages
              </li>
            </ul>
          </div>
        </div>

        <section className="w-full justify-center mt-8 flex">
          <div className="w-10/12 flex gap-3">
            <div className="w-full gap-3  flex flex-col items-center">
              <MemberTemplate />
              <ProjectTemplate />
            </div>
            <div className="w-7/12 ">
              <AboutTemplate />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;

const MemberTemplate = () => {
  return (
    <>
      <main className="w-full bg-white rounded-md min-h-[500px] px-4 py-6">
        <h2 className="font-[500] text-2xl">Members {"(5)"}</h2>
        <div className="w-full grid grid-cols-3 gap-4 mt-5">
          <div className="flex gap-2 max-w-[210px] items-center hover:bg-gray-100 cursor-pointer p-2 rounded-md">
            <div className="w-10 h-10 border-2 border-slate-400 border-dotted flex items-center justify-center rounded-full">
              <GoPlus />
            </div>
            <div className="text-[18px]">Add Member</div>
          </div>

          <div className="flex gap-2 max-w-[210px] items-center hover:bg-gray-100 cursor-pointer p-2 rounded-md">
            <div className="w-10 h-10 bg-red-500 flex items-center justify-center rounded-full">
              f
            </div>
            <div className="text-[18px]">Chidera Igboka 1</div>
          </div>
          <div className="flex gap-2 max-w-[210px] items-center hover:bg-gray-100 cursor-pointer p-2 rounded-md">
            <div className="w-10 h-10 bg-red-500 flex items-center justify-center rounded-full">
              f
            </div>
            <div className="text-[18px]">Chidera Igboka 1</div>
          </div>

          <div className="flex gap-2 max-w-[210px] items-center hover:bg-gray-100 cursor-pointer p-2 rounded-md">
            <div className="w-10 h-10 bg-red-500 flex items-center justify-center rounded-full">
              f
            </div>
            <div className="text-[18px]">Chidera Igboka 1</div>
          </div>

          <div className="flex gap-2 max-w-[210px] items-center hover:bg-gray-100 cursor-pointer p-2 rounded-md">
            <div className="w-10 h-10 bg-red-500 flex items-center justify-center rounded-full">
              f
            </div>
            <div className="text-[18px]">Chidera Igboka 1</div>
          </div>
        </div>
      </main>
    </>
  );
};
const ProjectTemplate = () => {
  return (
    <>
      <main className="w-full bg-white rounded-md min-h-[500px] py-6">
        <div className="px-4">
          <h2 className="font-[500] text-2xl">Projects</h2>
        </div>
        <div className="flex flex-col divide-y mt-5">
          <div className="flex gap-4 w-full items-center hover:bg-gray-100 cursor-pointer py-2 px-4 ">
            <div className="w-10 h-10 border-2 border-slate-400 border-dotted flex items-center justify-center rounded-lg">
              <GoPlus />
            </div>
            <div className="text-[18px]">Add Project</div>
          </div>

          <div className="flex gap-4 w-full items-center hover:bg-gray-100 cursor-pointer py-2 px-4 ">
            <div className="w-10 h-10 bg-red-500 flex items-center justify-center rounded-full">
              f
            </div>
            <div className="text-[18px]">Add Project</div>
          </div>

          <div className="flex gap-4 w-full items-center hover:bg-gray-100 cursor-pointer py-2 px-4 ">
            <div className="w-10 h-10 bg-red-500 flex items-center justify-center rounded-full">
              f
            </div>
            <div className="text-[18px]">Add Project</div>
          </div>
        </div>
      </main>
    </>
  );
};
const AboutTemplate = () => {
  return (
    <>
      <main className="bg-white w-full group rounded-md min-h-[400px] px-4 py-6">
 <div className="flex justify-between">
 <h3 className="font-[500] text-2xl">About</h3>
 <span className="text-xl cursor-pointer hidden group-hover:block">
    <AiOutlineEdit />
 </span>
 </div>
        <p className="mt-5 leading-6 text-[18px]">These references and associations allow you to retrieve detailed information about the associated documents when querying the Project collection. For example, when fetching a Project, you can use to replace the teamId</p>
      </main>
    </>
  );
};
