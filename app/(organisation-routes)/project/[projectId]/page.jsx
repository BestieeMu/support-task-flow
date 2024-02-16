"use client";
import React, { useEffect, useState } from "react";
import { GoFilter, GoPlus } from "react-icons/go";
import {
  HiOutlineViewList,
  HiOutlineViewGrid,
  HiOutlineDotsHorizontal,
  HiOutlineEmojiHappy,
} from "react-icons/hi";
import { LiaComment, LiaSortAlphaDownSolid } from "react-icons/lia";
import {
  MdAttachFile,
  MdClose,
  MdOutlineDashboardCustomize,
  MdOutlineUploadFile,
} from "react-icons/md";
import { Checkbox, Select, Tooltip } from "antd";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaCheck, FaCheckDouble } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { ProjectService } from "@/service/project.service";
import Image from "next/image";
import Loader from "@/components/loader/Loader";
import CreateTask from "@/components/dasboard-components/createTask/CreateTask";

const Tasks = ({ params }) => {
  const [project, setProject] = useState({});
  const [open, setOpen] = useState(false)


  const fetchProjectData = async () => {
    const projects = await ProjectService.fetchProjects();
 const currentProject = projects.filter((item)=> item._id === params.projectId)
    setProject(currentProject[0]);
  };
  useEffect(() => {
    fetchProjectData();
  }, []);

if(!project) return <h1>loading...</h1>

  return (
    <>
    <div className={Object.keys(project).length === 0  ? "w-full relative flex items-center justify-center min-h-screen" : "w-full "}>
   {Object.keys(project).length !== 0 &&  <main className="w-full flex justify-center">
        <div className="w-[98%] ">
          {/* main wrapper */}
          <div className="  w-full flex flex-col justify-between">
            {/* sub wrapper */}
            <div className="flex  w-full border-b border-slate-300 items-center mt-4 gap-3 justify-between">
              {/* the project icon */}
              <div className="m-fit">
                <div className="w-20 h-20 rounded-full flex justify-center items-center font-[600] text-3xl " style={{backgroundColor: project.color}}>
                <Image 
                      src={'https://res.cloudinary.com/dmbsct2bo/image/upload/v1702979454/samples/taskManagement/icons8-web-design-90_gqyyn8.png'}
                      width={40}
                      height={40}
                      alt={project.name + 'icon'}
                      />
                </div>
              </div>
              {/* //// */}
              <div className="flex flex-col  w-full   mt-5 justify-between">
                <div className="w-full flex items-center justify-between">
                  <h1 className="font-[600] text-[30px]">{project.name}</h1>
                </div>
                {/* ////////////////////////////////////////////// */}
                <div className="w-full flex items-end  justify-between gap-4 mt-2">
                  <div className="w-full flex items-center gap-4">
                    <div className="flex items-center  text-sm justify-center cursor-pointer  gap-2 hover:border-b border-gray-500 transition-all px-2 py-1">
                      <span className="text-1xl">
                        <HiOutlineViewGrid />
                      </span>
                      <p>Board View</p>
                    </div>

                    <div className="flex items-center  text-sm justify-center cursor-pointer  gap-2 hover:border-b border-gray-500 transition-all px-2 py-1">
                      <span className="text-1xl">
                        <HiOutlineViewList />
                      </span>
                      <p>List View</p>
                    </div>
                  </div>

                  <div className="w-full flex items-center gap-4 justify-end">
                    <div className="flex items-center gap-2 text-sm px-3 py-1  cursor-pointer hover:border-b border-gray-500 transition-all">
                      <span>
                        <GoFilter />
                      </span>{" "}
                      Tilter
                    </div>
                    <div className="flex items-center gap-2 text-sm px-3 py-1  cursor-pointer hover:border-b border-gray-500 transition-all">
                      <span>
                        <LiaSortAlphaDownSolid />
                      </span>{" "}
                      Sort
                    </div>
                    <div className="flex items-center gap-2 text-sm px-3 py-1  cursor-pointer hover:border-b border-gray-500 transition-all">
                      <span>
                        <MdOutlineDashboardCustomize />
                      </span>{" "}
                      Customize
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* add task button section */}
            <div className="w-full mt-3 border-b py-2 border-slate-300 ">
              <button className="px-2 py-1 text-xs hover:bg-gray-200 rounded-md border text-black border-gray-500 flex items-center gap-2 " onClick={() => setOpen(true)}>
                <span className="text-xl">
                  <GoPlus />
                </span>
                Add task
              </button>
            </div>
          </div>
          {/* the task sections wrapper */}
          {/* ////////////////////////////////////////////// */}
          <div className="w-full flex justify-between">
            <TaskWrapper
              block={"Backlog Tasks"}
              title={"Create calendar, chat and email app pages"}
            />
            <TaskWrapper
              block={"To Do Tasks"}
              title={"book a meeting with him"}
            />
            <TaskWrapper block={"In Process"} title={"create a wireframe"} />
            <TaskWrapper block={"Done"} title={"fix the camera"} />
          </div>
        </div>
      </main>}
     {
      Object.keys(project).length === 0 && <div>
       <Loader style={'w-[200px]  flex flex-col items-center gap-3 h-[200px]'}/>
      </div>
     }
     </div>
     <CreateTask open={open} onClose={setOpen}/>

    </>
  );
};

export default Tasks;

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

      {/* {viewMore &&  <TaskDetails close={setViewMore}/>} */}
    </>
  );
};

const TaskDetails = ({ close }) => {
  const [checked, setChecked] = useState(false);
  const onChange = (e) => {
    setChecked(e.target.checked);
    // console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <main className="w-full top-0 overflow-scroll z-20 py-20 left-0 right-0 bottom-0 fixed bg-black/5 h-screen flex justify-center items-start ">
        <div className="w-4/12 bg-white shadow-lg min-h-[400px] rounded-md px-5 py-6 mt-[40px]">
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
              <div className="w-full text-xl font-[600]">Ebika Chibu</div>
            </div>
            <div className="w-full flex items-center">
              <p className="w-4/12 text-1xl">Date</p>
              <div className="w-full text-xl font-[600]">12 Sep 2023</div>
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

            <div className="w-11/12 mt-4 text-[18px]">
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
    </>
  );
};


