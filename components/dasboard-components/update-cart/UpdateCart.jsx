import { Button, Drawer, Select, Space, Tooltip } from "antd";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdAttachFile, MdClose, MdOutlineUploadFile } from "react-icons/md";

const CreateTask = ({open, onClose}) => {
    const [title, setTitle] = useState("New Year Marketing Campaign");
    const [value, setValue] = useState(["a10", "c12", "h17", "j19", "k20"]);
    const [comment, setComment] = useState("");
  
    const options = [
      {
        value: "Emeka chibu",
        label: "Emeka chibu",
      },
      {
        value: "prince zuko",
        label: "prince zuko",
      },
      {
        value: "Kenny white",
        label: "Kenny white",
      },
      {
        value: "precious steve",
        label: "precious steve",
      },
    ];
    const selectProps = {
      mode: "multiple",
      style: {
        width: "100%",
      },
      value,
      options,
      onChange: (newValue) => {
        setValue(newValue);
      },
  
      maxTagCount: "responsive",
    };
  
    const handleChange = (value) => {
      // console.log(`selected ${value}`);
    };
    const maxCharacters = 50;
  
    const handleCommentChange = (event) => {
      const inputComment = event.target.value;
      if (inputComment.length <= maxCharacters) {
        setComment(inputComment);
      }
    };
  
    return (
      <>
      
        <Drawer
        title={`New Task`}
        placement="right"
        size={'large'}
        onClose={() => onClose(!open)}
        open={open}
        extra={
          <Space>
            {/* the header */}
            <div className="flex justify-end text-xl w-full">
             
              <Tooltip title="Attach files" color="#0c05eb">
                <span className="cursor-pointer text-gray-400 hover:text-black">
                  <MdAttachFile />
                </span>{" "}
              </Tooltip>
            </div>
          </Space>
        }
      >
      <main className="w-full   bg-black/5 h-screen flex justify-center items-center ">
        <div className="w-[100%] px-5  mt-5 py-5 bg-white rounded-md min-h-[500px]">
          <form action="">
          
            {/* form filed section */}

            <input
              type="text"
              value={title}
              placeholder="Task Name"
              onChange={(e) => setTitle(e.target.value)}
              className="outline-none w-full  text-2xl mt-5 font-[600] min-h-[40px]"
            />
            {/* grid field section */}
            <div className="w-full grid grid-cols-2 place-content-center gap-4 mt-5">
              <label htmlFor="assignee" className="w text-[500]">
                Assignee
                <input
                  type="text"
                  value={title}
                  placeholder="Task Name"
                  onChange={(e) => setTitle(e.target.value)}
                  className="outline-none w-full rounded-lg  border-2 text-1xl px-2 mt-2 font-[400] min-h-[40px]"
                />
              </label>
              <label htmlFor="assignee" className="w text-[500]">
                Assign to
                <Select
                  {...selectProps}
                  size="large"
                  className="outline-none w-full   text-1xl mt-2 font-[400] min-h-[40px]"
                />
              </label>
              <label htmlFor="assignee" className="w text-[500]">
                Start Date
                <input
                  type="date"
                  value={title}
                  placeholder="Task Name"
                  onChange={(e) => setTitle(e.target.value)}
                  className="outline-none w-full rounded-lg  border-2 text-1xl px-2 mt-2 font-[400] min-h-[40px]"
                />
              </label>
              <label htmlFor="assignee" className="w text-[500]">
                Due Date
                <input
                  type="date"
                  value={title}
                  placeholder="Task Name"
                  onChange={(e) => setTitle(e.target.value)}
                  className="outline-none w-full rounded-lg  border text-1xl px-2 mt-2 font-[400] min-h-[40px]"
                />
              </label>
            </div>
            {/* project and priority section */}
            <div className="w-full flex items-center gap-3 mt-5">
              <label htmlFor="assignee" className="w-full text-[500]">
                Project Label
                <Select
                  {...selectProps}
                  size="large"
                  className="outline-none w-full   text-1xl px-2 mt-2 font-[400] min-h-[40px]"
                />
              </label>
              <label htmlFor="assignee" className="w-5/12 text-[500]">
                Priority
                <Select
                  {...selectProps}
                  size="large"
                  className="outline-none w-full  text-1xl  mt-2 font-[400] min-h-[40px]"
                />
              </label>
            </div>
            {/* task description */}
            <div className="w-full  mt-5">
              <label htmlFor="assignee" className=" text-[500]">
                Task Description
                <div className="border-2 rounded-md mt-2">
                  <textarea
                    name=""
                    id=""
                    value={comment}
                    onChange={handleCommentChange}
                    className="w-full resize-none outline-none p-3 h-[100px] "
                  ></textarea>
                  <div className="w-full p-3 flex justify-end">
                    {comment.length}/{maxCharacters}
                  </div>
                </div>
              </label>
            </div>
            {/* the file section */}
            <div className="mt-5">
              <h2 className="text-gray-500 text-2xl font-[600]">Attachments</h2>
              <div className="mt-3 flex items-center gap-4">
                <div className="flex items-center min-h-[70px] gap-2 rounded-md border w-fit p-2">
                  <span className="text-4xl text-gray-400">
                    <MdOutlineUploadFile />
                  </span>
                  <div>
                    <p className="font-[600]">Guidelines.pdf</p>
                    <p>PDF . Download</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg border min-h-[70px] flex items-center justify-center">
                  <FiPlus />
                </div>
              </div>
            </div>
            {/* submit section */}
            <div className="w-full py-5 mt-5 border-t flex items-center justify-end">
              <button className="px-4 py-2 rounded-md bg-primary text-white">
                Create Task
              </button>
            </div>
          </form>
        </div>
      </main>
      </Drawer>
      </>
    );
  };

  export default CreateTask