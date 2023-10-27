import React from "react";

const MeetingCard = ({ leaderName, title, time, leaderImage }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-2">
      <div className="flex items-center">
        <img
          src={leaderImage}
          alt={leaderName}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p>{leaderName}</p>
          <p className="text-gray-600">{time}</p>
        </div>
      </div>
    </div>
  );
};

function Meetings() {
  return (
    <div className="App">
      <MeetingCard
        leaderName="John Doe"
        title="Team Meeting"
        time="Wednesday, 3:00 PM"
        leaderImage="url-to-image.jpg" // Provide the actual image URL
      />
      {/*/////*/}
    </div>
  );
}

export default  Meetings;
