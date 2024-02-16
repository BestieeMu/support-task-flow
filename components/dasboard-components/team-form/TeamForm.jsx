"use client";
import { AccountService } from "@/service/account.service";
import { TeamService } from "@/service/team.service";
import { Drawer, Tag } from "antd";

import { useEffect, useState } from "react";

import { Select } from "antd";
import { toast } from "sonner";

const TeamForm = ({ open, onClose }) => {
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const users = await AccountService.users();
        setUsers(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUser();
  }, []);

  const createTeam = async () => {
    console.log("clicked");
    setLoading(true);
    try {
      const team = await TeamService.create(teamName, teamDescription, members);
      toast.success("Team created successful");
      console.log("created", team);
      setLoading(false);
      setMembers([]);
      setTeamDescription("");
      setTeamName("");
    } catch (error) {
      toast.error("Error creating team");
      console.log(error);
      setLoading(false);
    }
  };

  const { Option } = Select;

  const userOptions =
    users &&
    users?.map((user) => (
      <Option key={user._id} value={user._id}>
        {user.name}
      </Option>
    ));

  const handleChange = (selectedValues) => {
    // Do something with the selected values, e.g., set it in state
    console.log("Selected Values:", selectedValues);
    setMembers(selectedValues);
  };

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;

    // Find the user based on the user ID (value)
    const selectedUser = users && users?.find((user) => user._id === value);

    return (
      <Tag
        color="blue" // You can customize the color as needed
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 3,
        }}
      >
        {selectedUser ? selectedUser.name : label}
      </Tag>
    );
  };

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
            Team Name:
            <input
              type="text"
              value={teamName}
              className="border-2 rounded w-full h-10 outline-none px-2"
              onChange={(e) => setTeamName(e.target.value)}
            />
          </label>

          <label className="flex flex-col w-full gap-2">
            Members
            <Select
              mode="multiple"
              tagRender={tagRender}
              style={{ width: "100%", outline: "none" }}
              placeholder="Select users"
              onChange={handleChange}
            >
              {userOptions}
            </Select>
          </label>

          <label className="flex flex-col w-full gap-2">
            Team Description:
            <textarea
              value={teamDescription}
              className="border-2 w-full p-3 outline-none h-[130px] resize-none rounded"
              onChange={(e) => setTeamDescription(e.target.value)}
            />
          </label>

          <button
            onClick={createTeam}
            disabled={loading}
            className={
              loading
                ? "bg-primary/40 mt-3 px-2 py-1 rounded text-white"
                : "bg-primary mt-3 px-2 py-1 rounded text-white"
            }
          >
            {true ? (
              <svg
                class="animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              ></svg>
            ) : (
              "Create Team"
            )}
          </button>

       
        </div>
      </Drawer>
    </>
  );
};

export default TeamForm;
