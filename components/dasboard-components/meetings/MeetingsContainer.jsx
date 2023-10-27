import React from "react";
import Meetings from "./Meetings";
import { BsPlusCircle } from "react-icons/bs";

const MeetingsContainer = () => {

  const meetings = [
    {
      leaderName: "John Doe",
      title: "Team Meeting",
      time: "Wednesday, 3:00 PM",
      leaderImage: "url-to-image-1.jpg",
    },
    {
      leaderName: "Alice Smith",
      title: "Project Review",
      time: "Thursday, 10:30 AM",
      leaderImage: "url-to-image-2.jpg",
    },
   
  ];

  return (
    <div className="bg-primary w-4/12 p-4 rounded-lg shadow-xl">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Meetings</h2>
        <BsPlusCircle className="hover:text-2xl hover:text-accent cursor-pointer text-xl"/>
      </div>
      <div className="mt-2 space-y-4">
        {meetings.map((meeting, index) => (
          <Meetings key={index} {...meeting} />
        ))}
      </div>
    </div>
  );
};

export default MeetingsContainer;
