import connectMongodb from "@/libs/mongodb/mongodb";
import Team from "@/models/team";
import Accounts from "@/models/register";

export async function GET(request) {
  try {
    await connectMongodb();

    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("email");

    if (!email) {
      return Response.json({ status: 401, message: "User not authenticated" });
    }


    // Find the user based on the email
    const user = await Accounts.findOne({ email: email });

    if (!user) {
      return Response.json({ status: 404, message: "User not found" });
    }

    // Find teams where the user is an admin or member
    const userTeams = await Team.find({
      $or: [
        { admins: user.email }, // Teams where the user is an admin by email
        { members: user._id }, // Teams where the user is a member by ID
      ],
    });

    return Response.json({ status: 200, data: userTeams, message: "Teams fetched successfully" });
  } catch (error) {
    console.error(error);
    return Response.json({ status: 500, message: "Server error" });
  }
}
