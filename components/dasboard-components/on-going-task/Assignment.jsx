import React, { useState } from "react";

const AssignedTasks = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");



  return (
  <>
    <div className="bg-white w-11/12 p-4 rounded-lg   p-6 shadow-md">
<h2 className="text-xl">Task Progress</h2>
<div>
  <Task label={'Shola'} progress={50} amount={'2/4'} color={'#0c05eb'}/>
  <Task label={'Dami'} progress={85} amount={'2/3'} color={'#0c05eb'}/>
  <Task label={'Seyi'} progress={70} amount={'3/5'} color={'#0c05eb'}/>
  <Task label={'Victor'} progress={100} amount={'2/2'} color={'#0c05eb'}/>
</div>
</div>
  </>
  );
};

const Task = ({label, progress, amount, color}) =>{
  return(
    <>
    <div className="w-full mt-5">
      <div className="w-full flex text-sm justify-between">
        <p>{label}</p>
        <div>{amount}</div>
        
      </div>
      <div className="w-full h-[5px] bg-slate-400/20 mt-1 rounded-full">
        <div className={`h-full  bg-primary rounded-full`} style={{width: `${progress}%`, backgroundColor: `${color}`}}></div>
      </div>
    </div>
    </>
  );
}

export default AssignedTasks;
