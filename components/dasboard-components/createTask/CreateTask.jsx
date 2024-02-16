import { Button, Drawer, Select, Space, Tooltip } from "antd";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdAttachFile, MdClose, MdOutlineUploadFile } from "react-icons/md";

const CreateTask = ({ open, onClose, email }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignedMembers, setAssignedMembers] = useState([]);
  const [priority, setPriority] = useState([]);
  const [labels, setLabels] = useState([]);
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
  const AssignProp = {
    mode: "multiple",
    style: {
      width: "100%",
    },
    assignedMembers,
    options,
    onChange: (newValue) => {
      setAssignedMembers(newValue);
    },

    maxTagCount: "responsive",
  };
  const PriorityProp = {
    mode: "multiple",
    style: {
      width: "100%",
    },
    priority,
    options,
    onChange: (newValue) => {
      setPriority(newValue);
    },

    maxTagCount: "responsive",
  };
  const LabelProp = {
    mode: "multiple",
    style: {
      width: "100%",
    },
    labels,
    options,
    onChange: (newValue) => {
      setLabels(newValue);
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
        size={"large"}
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
        <main className="w-full h-screen flex justify-center items-center ">
          <div className="w-[100%] px-5 pb-5 bg-white rounded-md min-h-[500px]">
            <form action="">
              {/* form filed section */}

              <input
                type="text"
                value={title}
                placeholder="Task Name"
                onChange={(e) => setTitle(e.target.value)}
                className="outline-none w-full  text-2xl  font-[600] min-h-[40px]"
              />
              {/* grid field section */}
              <div className="w-full grid grid-cols-2 place-content-center gap-4 mt-8">
                <label htmlFor="assignee" className="w text-[500]">
                  Assign to
                  <Select
                    {...AssignProp}
                    size="large"
                    className="outline-none w-full   text-1xl mt-2 font-[400] min-h-[40px]"
                  />
                </label>
                <label htmlFor="assignee" className="w-full text-[500]">
                  Priority
                  <Select
                    {...PriorityProp}
                    size="large"
                    className="outline-none w-full  text-1xl  mt-2 font-[400] min-h-[40px]"
                  />
                </label>

                <label htmlFor="assignee" className="w-full text-[500]">
                  Project Label
                  <Select
                    {...LabelProp}
                    size="large"
                    className="outline-none w-full   text-1xl px-2 mt-2 font-[400] min-h-[40px]"
                  />
                </label>
                <label htmlFor="assignee" className="w text-[500]">
                  Due Date
                  <input
                    type="date"
                    value={date}
                    placeholder="Task Name"
                    onChange={(e) => setDate(e.target.value)}
                    className="outline-none w-full rounded-lg  border text-1xl px-2 mt-2 font-[400] min-h-[40px]"
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
                <h2 className="text-gray-500 text-2xl font-[600]">
                  Attachments
                </h2>
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

export default CreateTask;
