import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const MeetingCard = ({ leaderName, title, time, leaderImage }) => {
  return (
    <>
      <div className="w-full py-3 bg-white shadow-md rounded-md px-3 mb-2">
        <div className="flex items-start w-full justify-between">
        <img
          src={leaderImage}
          alt={leaderName}
          className="w-10 h-10 rounded-full mr-4"
        />
          <div className="flex items-start  flex-col gap-1 w-10/12">
            <h2 className="text-1xl font-semibold">{title}</h2>
            <p className="text-sm">{leaderName}</p>
          </div>
          <span className="cursor-pointer"><CiMenuKebab /></span>
        </div>
        <div className="text-gray-600 text-xs mt-2">{time}</div>
      </div>
    </>
  );
};

function Meetings() {
  return (
    <div className="bg-transparent rounded-md">
      <h1 className="  text-xl ">Coming meetings</h1>
 <div className="w-full flex flex-col   gap-1 mt-5">
 <MeetingCard
        leaderName="John Doe"
        title="Team Meeting"
        time="Wednesday, 3:00 PM"
        leaderImage="https://seeklogo.com/images/Z/zoom-app-logo-B3FD9D4973-seeklogo.com.png" // Provide the actual image URL
      />
      <MeetingCard
        leaderName="John Doe"
        title="Team Meeting"
        time="Wednesday, 3:00 PM"
        leaderImage="https://seeklogo.com/images/G/google-meet-logo-4A8BC17A5B-seeklogo.com.png" // Provide the actual image URL
      />
 </div>
      {/*/////*/}
    </div>
  );
}

export default Meetings;
