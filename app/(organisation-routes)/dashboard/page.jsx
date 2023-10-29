"use client";
import Assignments from "@/components/dasboard-components/Assignment/Assignment";
import MyCalendar from "@/components/dasboard-components/calender/Calender";
import MeetingsContainer from "@/components/dasboard-components/meetings/MeetingsContainer";
import VCard from "@/components/dasboard-components/view-card/VCard";
import Chart from "@/components/dasboard-components/chart/Chart";
import React from "react";
import { VscSearch } from "react-icons/vsc";

const Page = () => {
  return (
    <>
      <div className="bg-primary w-full flex gap-10 items-start px-8 ">
        <div
          className=" mt-[30px] w-9/12"
        >
          {/* /////// */}
          <div className="w-full flex  py-2 items-center justify-between">
          <div className="font-bold text-2xl">
          Welcome back, Adrian
          </div>
         <div className="ml-6 w-4/12 relative">
            <input
              type="text"
              className="border px-8 outline-none bg-primary text-sm rounded-xl w-full h-[35px]"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 left-3 top-2/4 transform -translate-y-1/2 text-black">
              <VscSearch />
            </div>
            </div>
          <div className="ml-5 flex items-center  ">
            <select className="ml-2 border rounded-xl px-3 h-[35px] outline-none font-normal text-sm bg-primary">
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="365">Last 365 days</option>
            </select>
            <div className="bg-accent ml-2 h-[35px] rounded px-4 text-[15px] rounded-xl text-white font-normal flex items-center">
              Select
            </div>
          </div>
          
          </div>
       
         {/* /////////// */}
         <div>
          <div className="w-full justify-between mt-10 flex items-center gap-3">
            <VCard />
            <VCard />
            <VCard />
          </div>
          {/* /////////// */}
              <div className="w-9/12 gap-10 mt-10 flex items-start">
            <Chart/>
            <MeetingsContainer/>
          </div>
              </div>
        </div>
        <div className="w-full mt-5">
          <MyCalendar/>
          <Assignments/>
        </div>
      </div>
    </>
  );
};

export default Page;
