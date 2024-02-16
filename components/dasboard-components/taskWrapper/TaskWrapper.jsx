import { Checkbox } from "antd";
import { useState } from "react";
import { FaCheck, FaCheckDouble } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LiaComment } from "react-icons/lia";
import { MdAttachFile } from "react-icons/md";
import TaskDetails from "../task-details/TaskDetail";

const TaskWrapper = ({ block, title }) => {
    const [checked, setChecked] = useState(false);
    const [viewMore, setViewMore] = useState(false);
    const onChange = (e) => {
      setChecked(e.target.checked);
      // console.log(`checked = ${e.target.checked}`);
    };
    return (
      <>
        <main className="w-[294px] mt-5">
          <div className="flex w-full items-center h-[40px]  justify-between">
            <div className="flex items-center  gap-2">
              <h2 className="text-1xl font-[500]">{block}</h2> 5
            </div>
            <span className="text-xl cursor-pointer">
              <HiOutlineDotsHorizontal />
            </span>
          </div>
  
          {/* the task card  */}
          <div className="w-full rounded-md bg-white p-[20px] mt-7">
            {/* the title and check box to mark complete */}
            <div className="flex w-full justify-between items-start">
              <h6 className="text-[16px] w-9/12 font-[600]">{title}</h6>
              <div className="flex items-center justify-end gap-3 w-4/12 ">
                {" "}
                <div
                  className={
                    checked
                      ? "flex relative border border-gray-400 items-center w-[40px] text-center rounded-full h-[20px] "
                      : "flex relative items-center w-[40px] text-center rounded-full text-green-700 h-[20px] bg-green-400/30"
                  }
                >
                  {checked ? (
                    <FaCheck size={12} className=" absolute left-[30%]" />
                  ) : (
                    <FaCheckDouble size={12} className=" absolute left-[30%]" />
                  )}
                  <Checkbox
                    onChange={onChange}
                    className="w-full opacity-0"
                  ></Checkbox>
                </div>
                4
              </div>
            </div>
            {/* tags wrapper */}
            <div className="flex w-full flex-wrap gap-3 mt-[12px]">
              <span className="px-2 py-[2px] rounded-lg border  text-xs font-[500]">
                #U9459
              </span>
              <span className="px-2 py-[2px] rounded-lg bg-green-500/40 text-green-700 text-xs font-[500]">
                #U9459
              </span>
            </div>
            {/* the action section */}
            <div className="flex items-end justify-between mt-[16px] w-full">
              {/* members section */}
              <div
                className="relative flex w-full"
                onClick={() => setViewMore(!viewMore)}
              >
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
  
              {/* comment section */}
              <div className="w-full justify-end gap-4 flex items-center">
                <div className="flex items-center  text-gray-400 cursor-pointer hover:text-black gap-1">
                  <span>
                    <MdAttachFile />
                  </span>{" "}
                  5
                </div>
                <div className="flex items-center  text-gray-400 cursor-pointer hover:text-black gap-1">
                  <span>
                    <LiaComment />
                  </span>{" "}
                  10
                </div>
              </div>
            </div>
          </div>
        </main>
  
        { <TaskDetails open={viewMore} close={setViewMore}/>}   
      </>
    );
  };

  export default TaskWrapper