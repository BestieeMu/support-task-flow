import { getSession } from "next-auth/react";

export const TeamService = {
  create: async (teamName, teamDescription, members) => {
    try {
      const session = await getSession();
      const response = await fetch(
        `api/team/create?email=${session?.user?.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: teamName,
            description: teamDescription,
            members,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Team created:", data);
        return data.data;
        // Handle successful response, e.g., redirect to team page
      } else {
        console.error("Error creating team:", response.statusText);
        // Handle error response, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Error creating team:", error);
      // Handle fetch error, e.g., show an error message to the user
      return error;
    }
  },

  fetchTeams: async () => {
    try {
      const session = await getSession();
      const response = await fetch(`/api/team?email=${session?.user?.email}`);
      if (!response.ok) {
        // throw new Error("Network response was not ok");
        return false;
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
