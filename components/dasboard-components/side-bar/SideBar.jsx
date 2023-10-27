import React from "react";
import { FaChartBar, FaTasks, FaUsers, FaToolbox, FaCog } from "react-icons/fa";
import { VscChevronDown } from "react-icons/vsc";

const SideBar = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start bg-background gap-10 h-screen text-text">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Sidebar</h1>
      </div>
      <ul className="flex flex-col gap-5">
        <li className="mb-2">
          <a to="/analytics" className="flex items-center hover:text-secondary">
            <FaChartBar className="mr-4" /> Analytics
            <VscChevronDown className="inline ml-3" />
          </a>
        </li>
        <li className="mb-2">
          <a to="/tasks" className="flex items-center hover:text-secondary">
            <FaTasks className="mr-4" /> Tasks
            <VscChevronDown className="inline ml-6" />
          </a>
        </li>
        <li className="mb-2">
          <a to="/members" className="flex items-center hover:text-secondary">
            <FaUsers className="mr-4" /> Members
          </a>
        </li>
        <li className="mb-2">
          <a to="/tools" className="flex items-center hover:text-secondary">
            <FaToolbox className="mr-4" /> Tools
          </a>
        </li>
        <li className="mb-2">
          <a to="/settings" className="flex items-center hover:text-secondary">
            <FaCog className="mr-4" /> Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
