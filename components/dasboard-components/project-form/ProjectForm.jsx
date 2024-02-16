"use client";
import { AccountService } from "@/service/account.service";
import { ProjectService } from "@/service/project.service";
import { TeamService } from "@/service/team.service";
import { Drawer, Dropdown, Space, Menu } from "antd";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ProjectForm = ({ open, onClose }) => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [teamId, setTeamId] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const teams = await TeamService.fetchTeams();
        setTeams(teams);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUser();
  }, []);

  const createProject = async () => {
    setLoading(true)
    try {
      const project = await ProjectService.create(
        projectName,
        projectDescription,
        teamId,
      );
      toast.success("Team created successful");
      console.log('created', project);
      setLoading(false)

    } catch (error) {
      toast.error("Error creating team");
      console.log(error);
      setLoading(false)
    }
  };

  const teamsDropdown = (
    <Menu>
       {teams && teams?.map((team) => (
        <Menu.Item
          key={team._id}
          onClick={() => handleTeamSelection(team._id, team.name)}
        >
          {team.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  const handleTeamSelection = (teamId, teamName) => {
    // Do something with the selected teamId, e.g., set it in state\
    setTeamId(teamId);
    setTeamName(teamName);
    console.log("Selected Team ID:", teamName, teamId);
  };

  const dropdownTrigger = (
    <span>{teamName != "" ? teamName : " Select Team "}</span>
  );

  return (
    <>
      <Drawer
        title={`Create New Team`}
        placement="right"
        size={"default"}
        onClose={() => onClose(!open)}
        open={open}
      >
        <div className="flex flex-col gap-3">
          <label className="flex flex-col w-full gap-2">
            Project Name:
            <input
              type="text"
              value={projectName}
              className="border-2 rounded w-full h-10 outline-none px-2"
              onChange={(e) => setProjectName(e.target.value)}
            />
          </label>

          <label className="flex flex-col w-full  gap-2">
            Team:
            <div className="w-full h-10 flex items-center px-2 rounder border-2">
              <Dropdown
                overlay={teamsDropdown}
                className="w-full"
                trigger={["click"]}
              >
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  {dropdownTrigger}
                </a>
              </Dropdown>
            </div>
          </label>

          <label className="flex flex-col w-full gap-2">
            Project Description:
            <textarea
              value={projectDescription}
              className="border-2 w-full p-3 outline-none h-[130px] resize-none rounded"
              onChange={(e) => setProjectDescription(e.target.value)}
            />
          </label>

          <button
            onClick={createProject}
            className={loading ? "bg-primary/40 mt-3 px-2 py-1 rounded text-white" : "bg-primary mt-3 px-2 py-1 rounded text-white"}
            >
         {loading ? "loading.." : 'Create Project'}
          </button>

          {/* {teams?.map((item) => (
            <>
              <div>{item._id}</div>
              <div>{item.name}</div>
             
              <hr />
            </>
          ))} */}
        </div>
      </Drawer>
    </>
  );
};

export default ProjectForm;
