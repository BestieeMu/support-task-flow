export const AccountService = {
  currentUser: async (email) => {
    try {
      const response = await fetch(`/api/user?email=${email}`);
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

  users: async () => {
    try {
      const response = await fetch(`/api/user/users`);
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
