import { getSession } from "next-auth/react";

export const TaskService = {
    create: async (title, description, startDate, dueDate, status, labels, subTask, priority, attachments, assignedMembers, projectId) => {
        try {
            const session = await getSession();
            const response = await fetch(
                `/api/task/create?email=${session?.user?.email}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title,
                        description,
                        startDate,
                        dueDate,
                        status,
                        labels,
                        subTask,
                        priority,
                        attachments,
                        assignedMembers,
                        projectId
                    }),
                }
            );

            if (response.ok) {
                const data = await response.json();
                console.log("task created:", data);
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
    update: async () => {

    }

}