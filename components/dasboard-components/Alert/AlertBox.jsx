import React, { useState } from "react";
import { FaBell } from "react-icons/fa";

const AlertBox = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");



  return (
  <>
    <div className="bg-white w-11/12 p-4 rounded-lg   p-3 shadow-md">
<div className="flex justify-between items-center">
<h2 className="text-xl  text-black">Alerts</h2>
<p className="text-1xl text-black/50 cursor-pointer">See All</p>
</div>
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
    <div className="w-full flex items-center justify-between rounded-md hover:shadow-lg cursor-pointer text-sm border-[1px] hover:border-0 p-3 mt-5">
     <div><FaBell size={14} className="text-secondary"/></div>
     <div className="w-1/2">
      <p>you need to cook</p>
     </div>
     <div>5:50 pm</div>
    </div>
    </>
  );
}

export default AlertBox;