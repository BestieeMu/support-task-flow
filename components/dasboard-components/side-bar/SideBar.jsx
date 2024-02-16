"use client";
import { MainContext } from "@/context/account";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiUsersThreeThin } from "react-icons/pi";
import { RiHomeLine } from "react-icons/ri";
import TeamForm from "../team-form/TeamForm";
import ProjectForm from "../project-form/ProjectForm";
import { TeamService } from "@/service/team.service";
import { ProjectService } from "@/service/project.service";
import Image from "next/image";

const SideBar = () => {
  const [openTeam, setOpenTeam] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [teams, setTeams] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teams = await TeamService.fetchTeams();
        // console.log(teams);
        setTeams(teams);
        const projects = await ProjectService.fetchProjects();
        // console.log(projects);
        setProjects(projects);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>

      <div className="w-full relative flex flex-col items-center justify-start bg-white gap-3 h-screen text-text">
        <span className="text-3xl cursor-pointer text-accent absolute right-[-20px] top-3 w-[40px] h-[40px] rounded-full bg-white border-4 border-secondary flex items-center justify-center">
          <FaAngleRight />
        </span>

        <div className="p-2  mt-8">
          <h1 className="text-xl text-center font-bold">{"chidera igboka"}</h1>
          {/* <p className="text-xl mt-3">{item?.org_name}</p> */}
        </div>

        <div className="w-11/12 flex flex-col border-b-2 pb-3  items-center">
          <ul className="flex flex-col gap-2 mt-2 w-11/12">
            <Link href="/dashboard">
              <li className=" cursor-pointer flex items-center">
                <span className="text-gray-500">
                  <RiHomeLine className="mr-2" />
                </span>
                <p className="text-[16px]">Home</p>
              </li>
            </Link>
            <Link href="/task">
              <li className=" cursor-pointer flex items-center">
                <span className="text-gray-500">
                  <IoMdCheckmarkCircleOutline className="mr-2" />
                </span>
                <p className="text-[16px]">Tasks</p>
              </li>
            </Link>
            <Link href="/dashboard">
              <li className=" cursor-pointer flex items-center">
                <span className="text-gray-500">
                  <HiOutlineBell className="mr-2" />
                </span>
                <p className="text-[16px]">Inbox</p>
              </li>
            </Link>
          </ul>
        </div>

        <div className="w-11/12 flex flex-col  items-center">
          <div className="w-11/12 flex items-center gap-2 group">
            <p className="font-[600] text-1xl">Projects</p>{" "}
            <span
              className="group-hover:block hidden"
              onClick={() => setOpenProject(true)}
            >
              <AiOutlinePlus />
            </span>
          </div>
          <ul className="flex flex-col gap-3 mt-2 w-11/12">
            {projects?.map((item) => (
              <>
                <Link href={`/project/${item._id}`}>
                  <li className=" cursor-pointer flex items-center">
                    <div className="w-4 h-4 bg-red-500 mr-2 rounded-sm" style={{backgroundColor: item?.color}}>
                     
                    </div>
                    <p className="text-[16px] font-[400]">
                      {item?.name?.length > 11
                        ? item?.name?.substring(0, 11) + "..."
                        : item.name}
                    </p>
                  </li>
                </Link>
              </>
            ))}
          </ul>
        </div>

        <div className="w-11/12 flex flex-col  items-center">
          <div className="w-11/12 flex items-center gap-2 group">
            <p className="font-[600] text-1xl">Teams</p>
            <span
              className="group-hover:block hidden"
              onClick={() => setOpenTeam(true)}
            >
              <AiOutlinePlus />
            </span>
          </div>
          <ul className="flex flex-col gap-3 mt-2 w-11/12">
            {teams?.map((item) => (
              <>
                <Link href={`/team/${item._id}`}>
                  <li className=" cursor-pointer flex items-center">
                    <span className="mr-2 text-gray-500">
                      <PiUsersThreeThin />
                    </span>
                    <p className="text-[16px] font-[400]">
                      {item.name.length > 11
                        ? item.name.substring(0, 11) + "..."
                        : item.name}
                    </p>
                  </li>
                </Link>
              </>
            ))}
          </ul>
        </div>
      </div>
      <TeamForm open={openTeam} onClose={setOpenTeam} />
      <ProjectForm open={openProject} onClose={setOpenProject} />
    </>
  );
};

export default SideBar;
