"use client";

import { Drawer } from "vaul";
import { useState } from "react";
const { Checkbox } = require("antd");
const { FaCheck, FaCheckDouble } = require("react-icons/fa");
const { HiOutlineEmojiHappy } = require("react-icons/hi");
const { IoIosAddCircleOutline } = require("react-icons/io");
const { LuDot } = require("react-icons/lu");
const { MdAttachFile, MdClose } = require("react-icons/md");

const TaskDetails = ({ close, open }) => {
  const [checked, setChecked] = useState(false);
  const onChange = (e) => {
    setChecked(e.target.checked);
    // console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
        <Drawer.Root  open={open}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
            <div className="p-4 bg-white rounded-t-[10px]  overflow-auto flex-1">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
              <div className="w-6/12  mx-auto">
                {/* <Drawer.Title className="font-medium mb-4">
                  Unstyled drawer for React.
                </Drawer.Title> */}
      <main className="w-full z-20  flex justify-center items-start ">
        <div className="w-full bg-white  min-h-[400px] rounded-md px-5 py-5 ">
          <div className="flex justify-end w-full">
            <span
              className="text-xl cursor-pointer"
              onClick={() => close(false)}
            >
              <MdClose />
            </span>
          </div>
          {/* the title and check box to mark complete */}
          <div className="flex w-full justify-between mt-5 items-start">
            <h6 className="text-[25px] w-9/12 font-[600]">
              Create calendar, chat and email app pages
            </h6>
            <div className="flex items-center justify-end gap-3 w-4/12 ">
              {" "}
              <div
                className={
                  checked
                    ? "flex relative border border-gray-400 items-center w-[70px] text-center rounded-full h-[30px] "
                    : "flex relative items-center w-[70px] text-center rounded-full text-green-700 h-[30px] bg-green-400/30"
                }
              >
                {checked ? (
                  <FaCheck size={13} className=" absolute left-[40%]" />
                ) : (
                  <FaCheckDouble size={13} className=" absolute left-[40%]" />
                )}
                <Checkbox
                  onChange={onChange}
                  className="w-full opacity-0"
                ></Checkbox>
              </div>
              4
            </div>
          </div>
          {/* task info */}
          <div className="w-full flex flex-col gap-5 mt-[25px]">
            <div className="w-full flex items-center">
              <p className="w-4/12 text-1xl">Assignee</p>
              <div className="w-full text-xl font-[500]">Ebika Chibu</div>
            </div>
            <div className="w-full flex items-center">
              <p className="w-4/12 text-1xl">Date</p>
              <div className="w-full text-xl font-[500]">12 Sep 2023</div>
            </div>
            <div className="w-full flex items-center">
              <p className="w-4/12 text-1xl">Tags</p>
              <div className="flex w-full items-center w-full flex-wrap gap-3 ">
                <span className="px-2 py-[2px] rounded-lg border  text-xs font-[500]">
                  #U9459
                </span>
                <span className="px-2 py-[2px] rounded-lg bg-green-500/40 text-green-700 text-xs font-[500]">
                  #U9459
                </span>
              </div>
            </div>
            <div className="w-full flex items-center">
              <p className="w-4/12 text-1xl">Assigned</p>
              <div className="w-full">
                {/* members wrapper */}
                <div className="relative flex w-4/12 ">
                  <div
                    className="min-w-[35px]  min-h-[35px] bg-yellow-400 border-2 border-[#f3f3f3] rounded-full"
                    style={{
                      backgroundImage: `url(${"https://img.freepik.com/free-photo/half-length-shot-positive-afro-american-woman-bites-lips-keeps-hands-raised-looks-curiously-away-smiles-intrigued-notices-something-interesting-wears-casual-jumper-isoated-orange-wall_273609-47740.jpg?size=626&ext=jpg&ga=GA1.1.1888410352.1696629113&semt=ais"})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div
                    className="min-w-[35px] absolute left-[15%] min-h-[35px] bg-blue-400 border-2 border-[#f3f3f3] rounded-full"
                    style={{
                      backgroundImage: `url(${"https://img.freepik.com/free-photo/black-boy-posing_23-2148171776.jpg?size=626&ext=jpg&ga=GA1.1.1888410352.1696629113&semt=ais"})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="min-w-[35px] absolute left-[30%] min-h-[35px] flex justify-center items-center bg-gray-300 rounded-full">
                    +5
                  </div>
                  {/* add member button */}
                  <div className="w-[35px] absolute left-[62%] h-[35px] border-2 border-dotted cursor-pointer hover:scale-[1.05] hover:shadow-sm border-gray-400 text-gray-400  hover:text-black flex items-center justify-center  rounded-full">
                    <IoIosAddCircleOutline />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* all comments shows here */}
          <div className="mt-8 border-t border-b mb-8 py-5">
            <div className="flex items-center gap-3">
              <div
                className="min-w-[35px]  min-h-[35px] bg-yellow-400 border-2 border-[#f3f3f3] rounded-full"
                style={{
                  backgroundImage: `url(${"https://img.freepik.com/free-photo/half-length-shot-positive-afro-american-woman-bites-lips-keeps-hands-raised-looks-curiously-away-smiles-intrigued-notices-something-interesting-wears-casual-jumper-isoated-orange-wall_273609-47740.jpg?size=626&ext=jpg&ga=GA1.1.1888410352.1696629113&semt=ais"})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="flex items-center text-sm text-gray-400">
                <p className="text-xl text-black">Roxana Johnsson</p>{" "}
                <span>
                  <LuDot />
                </span>
                6m ago
              </div>
            </div>

            <div className="w-11/12 mt-4 text-[16px]">
              <p>
                hi admin! could you take quick look at these landing page
                designs? Thanks so much!
              </p>
            </div>

            <div className="flex items-center gap-5 text-1xl mt-5">
              <span className="cursor-pointer text-xl">
                <HiOutlineEmojiHappy />
              </span>

              <span className="flex items-center cursor-pointer gap-2 bg-gray-200/50 border-2 border-gray-300 rounded-full px-2">
                <p>👌</p>3
              </span>
              <p className="text-xl text-accent font-[500] cursor-pointer">
                Reply
              </p>
            </div>
          </div>
          {/* comment textarea */}
          <div className="border mt3 rounded-md border-gray-300">
            <textarea
              name="comment"
              id=""
              className="w-11/12 p-2 h-[70px] resize-none outline-none"
            ></textarea>
            <div className="flex items-center justify-between px-2 py-3">
              <div className="flex items-center text-2xl gap-5">
                <span className="cursor-pointer">
                  {" "}
                  <MdAttachFile />
                </span>
                <span className="cursor-pointer">
                  <HiOutlineEmojiHappy />
                </span>
              </div>
              <button className="px-4 text-white rounded-md py-2 bg-primary">
                Comment
              </button>
            </div>
          </div>
        </div>
      </main>
      </div>
            </div>
          </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
    </>
  );
};

export default TaskDetails;
