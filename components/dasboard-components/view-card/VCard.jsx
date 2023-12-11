import React from "react";
import { VscArrowUp } from "react-icons/vsc";


const VCard = ({label, profit, value}) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md pl-4 w-full flex flex-col  text-white h-[100px] py-2 ">
        <div className=" w-full ">
          <h5 className="text-text font-[500]">
            {label}
          </h5>
        </div>

        <div className="w-full mt-3 flex  gap-2 items-end ">
          <div className="font-[600] text-3xl text-accent">{value}</div>
          <div className="flex gap-1 bg-green-500/20 text-xs rounded p-[1px] items-center text-green-700">
            <VscArrowUp className="" /> {profit}
          </div>
        </div>
      </div>
    </>
  );
};

export default VCard;
