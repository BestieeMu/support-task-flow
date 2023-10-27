import React, { useState } from "react";

const AssignmentContainer = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {
    if (newTask) {
      setCompletedTasks([...completedTasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className="bg-primary w-full p-4 rounded-lg  mt-6 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Assignments</h2>
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-sm">Completed Today</h3>
        {completedTasks.map((task, index) => (
          <div key={index} className="flex items-center">
            <input type="checkbox" className="mr-2 bg-accent" checked readOnly />
            <span>{task}</span>
          </div>
        ))}
        <div className="flex items-center">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add completed assignment"
            className="border px-2 outline-none text-sm rounded w-full h-[35px] mr-2"
          />
          <button onClick={addNewTask} className="bg-accent text-white px-2 rounded">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentContainer;
