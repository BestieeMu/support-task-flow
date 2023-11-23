export const checkUserVerification = async (email) => {
  try {
    const response = await fetch(`/api/check-verification?email=${email}`);
    if (!response.ok) {
      // throw new Error("Network response was not ok");
      return false;
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

