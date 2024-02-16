import { getSession, useSession } from "next-auth/react";
export const ProjectService = {
  create: async (projectName, projectDescription, teamId) => {
    try {
      const session = await getSession();
      const response = await fetch(
        `/api/project/create?email=${session?.user?.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: projectName,
            description: projectDescription,
            teamId,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("project created:", data);
        return data.data;
        // Handle successful response, e.g., redirect to team page
      } else {
        console.error("Error creating project:", response.statusText);
        // Handle error response, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Error creating project:", error);
      // Handle fetch error, e.g., show an error message to the user
      return error
    }
  },

  fetchProjects: async (email) => {
    const session = await getSession();

    try {
      const response = await fetch(
        `/api/project?email=${email || session.user.email}`
      );
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
