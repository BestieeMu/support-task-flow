"use client";
import React, { useState } from "react";
import { GoFilter, GoPlus } from "react-icons/go";
import { HiOutlineViewList, HiOutlineViewGrid } from "react-icons/hi";
import { LiaSortAlphaDownSolid } from "react-icons/lia";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { useSession } from "next-auth/react";
import TaskWrapper from "@/components/dasboard-components/taskWrapper/TaskWrapper";
import CreateTask from "@/components/dasboard-components/createTask/CreateTask";

const Tasks = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const useEmail = session?.user?.email;
  return (
    <>
      <main className="w-full flex justify-center">
        <div className="w-[98%] ">
          <div className="flex w-full items-center mt-10 justify-between">
            <h1 className="font-[600] text-[30px]">Task Boards</h1>

            <div>
              <button
                className="px-5 py-2 text-1xl rounded-lg bg-primary text-white flex items-center gap-2 "
                onClick={() => setOpen(true)}
              >
                <span className="text-2xl">
                  <GoPlus />
                </span>
                Add task
              </button>
            </div>
          </div>
          {/* ////////////////////////////////////////////// */}
          <div className="w-full flex items-center justify-between mt-8">
            <div className="flex gap-2 w-[300px] ">
              <div className="flex items-center rounded text-sm justify-center cursor-pointer w-full bg-white gap-2 hover:shadow-md transition-all hover:scale-[1.01] shadow-sm px-2 py-1">
                <span className="text-1xl">
                  <HiOutlineViewGrid />
                </span>
                <p>Board View</p>
              </div>
              <div className="flex items-center rounded text-sm justify-center cursor-pointer w-full bg-white gap-2 hover:shadow-md transition-all hover:scale-[1.01] shadow-sm px-2 py-1">
                <span className="text-1xl">
                  <HiOutlineViewList />
                </span>
                <p>List View</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-white text-sm px-3 py-1 border cursor-pointer hover:shadow-md transition-all hover:scale-[1.01] shadow-sm rounded-md">
                <span>
                  <GoFilter />
                </span>{" "}
                Tilter
              </div>
              <div className="flex items-center gap-2 bg-white text-sm px-3 py-1 border cursor-pointer hover:shadow-md transition-all hover:scale-[1.01] shadow-sm rounded-md">
                <span>
                  <LiaSortAlphaDownSolid />
                </span>{" "}
                Sort
              </div>
              <div className="flex items-center gap-2 bg-white text-sm px-3 py-1 border cursor-pointer hover:shadow-md transition-all hover:scale-[1.01] shadow-sm rounded-md">
                <span>
                  <MdOutlineDashboardCustomize />
                </span>{" "}
                Customize
              </div>
            </div>
          </div>

          {/* ////////////////////////////////////////////// */}
          <div className="w-full flex justify-between">
            <TaskWrapper
              block={"Backlog Tasks"}
              title={"Create calendar, chat and email app pages"}
            />
            <TaskWrapper
              block={"To Do Tasks"}
              title={"book a meeting with him"}
            />
            <TaskWrapper block={"In Process"} title={"create a wireframe"} />
            <TaskWrapper block={"Done"} title={"fix the camera"} />
          </div>
        </div>
      </main>
      <CreateTask open={open} onClose={setOpen} email={useEmail} />
    </>
  );
};

export default Tasks;
