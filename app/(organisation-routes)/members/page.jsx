import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { LiaLinkedin } from "react-icons/lia";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";

const Page = () => {
  return (
    <>
      <main className="w-full flex justify-center">
        <div className="w-[98%] ">
          <div className="flex w-full items-center mt-10 justify-between">
            <h1 className="font-[600] text-[30px]">Members Board</h1>

            <div>
              <button className="px-5 py-2 text-1xl rounded-lg bg-primary text-white flex items-center gap-2 ">
                <span className="text-2xl">
                  <GoPlus />
                </span>
               Invite
              </button>
            </div>
          </div>
          {/* /////////////////////// */}
<div className="w-full grid grid-cols-4 place-items-center mt-10">
<MemberCard />
<MemberCard />
<MemberCard />
<MemberCard />
</div>
        </div>
      </main>
    </>
  );
};

export default Page;

const MemberCard = () =>{
return(
    <>
    <div className="w-[300px] bg-white flex flex-col items-center shadow-md px-2 rounded-md min-h-[330px]">
<div className="flex flex-col items-start gap-1 mt-6 w-11/12">
    <div className="w-[90px] h-[90px] rounded-lg bg-green-500"
    style={{
      backgroundImage: `url(${'https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg?size=626&ext=jpg&ga=GA1.1.1888410352.1696629113&semt=ais'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
    >
    </div>
    <h4 className="font-[600] text-xl">Chidera Igboka</h4>
    <p className="text-1xl  text-black font-[500] text-[#7b7b7b]">chideraigboka@gmail.com</p>
</div>
{/* social media */}
<div className="w-11/12 mt-3 flex justify-between text-2xl">
  <div className="flex gap-3">
    <span className="cursor-pointer text-[#7b7b7b]"><PiMicrosoftOutlookLogo /></span>
    <span className="cursor-pointer text-[#7b7b7b]"><LiaLinkedin /></span>
  </div>
  <div>
    <span className="cursor-pointer text-[#7b7b7b]"><AiOutlineMessage /></span>
  </div>
</div>
{/* more info */}
<div className="w-11/12 mt-5">
  <div>
    <p className="text-xl text-[#7b7b7b]">Position</p>
    <p className="mt-1">Product Manager</p>
  </div>
  <div className="flex mt-3 mb-6 items-end justify-between">
    <div className="flex flex-col items-center">
      <p className="text-xl text-[#7b7b7b]">Task</p>
      <div className="text-xl mt-1">43</div>
    </div>
    <button className="px-4 py-2 rounded-md bg-secondary">assign</button>
  </div>
</div>
</div>
    </>
);
}