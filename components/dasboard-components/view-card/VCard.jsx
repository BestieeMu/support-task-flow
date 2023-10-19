import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { VscArrowUp } from "react-icons/vsc";


const VCard = () => {
  return (
    <>
      <div className="bg-accent rounded-lg shadow-lg px-4 w-[320px] flex flex-col gap-5 text-white h-[170px] py-4 ">
        <div className="flex w-full justify-between items-center">
          <h5>Daily Task</h5> <span><FaEllipsisVertical /></span>
        </div>
        <div className="flex w-full h-full ">
          <div className="w-full h-full flex flex-col justify-between ">
            <div className="font text-4xl">{'250'}</div>
            <span className="flex items-center">
                <div className="flex gap-3   items-center">
                  <VscArrowUp className="text-green-500" /> 8 vs last month
               </div>
            </span>
          </div>
          <div className="w-full bg-blue-500">dfdfd</div>
        </div>
      </div>
    </>
  );
};

export default VCard;
