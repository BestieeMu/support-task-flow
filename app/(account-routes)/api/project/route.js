// pages/api/projects.js
import connectMongodb from "@/libs/mongodb/mongodb";
import Project from "@/models/project";
import Accounts from "@/models/register";


export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("email");
    await connectMongodb();

    if (!email) {
      return Response.json({ status: 401, message: "User not authenticated" });
    }

    // Find the user based on the email
    const user = await Accounts.findOne({ email: email });

    if (!user) {
      return Response.json({ status: 404, message: "User not found" });
    }

    // Use aggregation to find projects associated with user's teams
    const userProjects = await Project.aggregate([
      {
        $lookup: {
          from: "teams",
          localField: "teamId",
          foreignField: "_id",
          as: "team",
        },
      },
      {
        $match: {
          $or: [
            { "team.members": user._id },
            { "owner": user.email }, // Projects where the user is the owner
          ],
        },
      },
    ]);

    return Response.json({
      status: 200,
      data: userProjects,
      message: "Projects fetched successfully",
    });
  } catch (error) {
    console.error(error);
    return Response.json({ status: 500, message: "Server error" });
  }
}
