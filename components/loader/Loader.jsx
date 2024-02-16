import Image from "next/image";
import React from "react";

const Loader = ({ style }) => {
  return (
    <>
      <div className={`${style}`}>
        <Image
          src={
            "https://res.cloudinary.com/dmbsct2bo/image/upload/v1702979454/samples/taskManagement/icons8-web-design-90_gqyyn8.png"
          }
          width={50}
          height={50}
          alt={"logo"}
          className=" "
        />

        <div className="flex items-center overflow-hidden h-1  rounded-lg w-[150px] bg-gray-200">
          <div className="w-[70px] animate-load h-1   rounded-lg bg-accent"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
