import Image from "next/image";
import React from "react";

const Preview = () => {
  return (
    <>
      <div className="w-full flex justify-center pb-10 ">
        <div className="w-9/12  p-3 rounded-md h-[600px]">
          <div className="w-full  relative rounded-md h-full"
            // style={{
            //     backgroundImage: `url(${"https://res.cloudinary.com/dmbsct2bo/image/upload/v1696331109/03007_vzshnm.png"})`,
            //     backgroundRepeat: "no-repeat",
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            //     // boxShadow:
            //     //   "inset 0 0 0 2000px rgba(0, 0, 0, 0.355)",
            //   }}
              >
            <Image
              src={
                "https://res.cloudinary.com/dmbsct2bo/image/upload/v1696420173/03011_fcoi7k.png"
              }
             fill={true}
              alt="inline-tag"
              className="w-full object-fit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
