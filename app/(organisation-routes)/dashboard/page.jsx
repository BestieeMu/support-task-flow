"use client";

import AlertBox from "@/components/dasboard-components/Alert/AlertBox";
import ChartView from "@/components/dasboard-components/chart/Chart";
import Meetings from "@/components/dasboard-components/meetings/Meetings";
import AssignedTasks from "@/components/dasboard-components/on-going-task/Assignment";
import VCard from "@/components/dasboard-components/view-card/VCard";
import { MainContext } from "@/context/account";


import React, { useContext, useEffect } from "react";

const Page = () => {
  return (
    <>
      <div className=" h-full w-full  flex  items-start  ">
        {/* /////// */}
        <div className="w-full flex mt-4 py-2 items-center flex-col ">
          <HomeHeader />
          <div className="w-[98%] gap-4 flex justify-between items-center mt-10 ">
            <VCard label={"Tasks"} value={234} profit={"1.3%"} />
            <VCard label={"Completed Tasks"} value={234} profit={"1.3%"} />
            <VCard label={"Pending Tasks"} value={234} profit={"1.3%"} />
            <VCard label={"Not Assigned tasks"} value={234} profit={"1.3%"} />
          </div>

          <div className="w-[98%] gap-3 mt-10 flex items-start">
            <ChartView />
            <div className="w-[40%] ">
              <Meetings />
            </div>
          </div>
        </div>

        <div className="w-[410px] flex-col gap-5 flex items-center mt-4 ">
          <AssignedTasks />
          <AlertBox />
        </div>
      </div>
    </>
  );
};

export default Page;

const HomeHeader = () => {
  return (
    <>
      <main className="w-[98%] flex  items-start justify-between">
        {" "}
        <div className="font-[500] ml-4 text-3xl text-black">
          Welcome Chidera! ✌️
        </div>
        <div className="ml-5 flex gap-8 items-center  ">
          <select className="ml-2 border rounded-xl px-3 h-[35px] outline-none font-normal text-sm bg-slate-200">
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="365">Last 365 days</option>
          </select>
          <div className="bg-secondary ml-2 h-[35px] rounded px-5 text-[15px] rounded-xl text-black font-normal flex items-center">
            Select
          </div>
        </div>
      </main>
    </>
  );
};
