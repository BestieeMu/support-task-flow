import { NextResponse } from "next/server";
import Project from "@/models/project";
import connectMongodb from "@/libs/mongodb/mongodb";

// Array of predefined colors and icons
const colors = ["#FF5733", "#7E30E1", "#5733FF", "#5F6F52", "#7ED7C1", "#B80000", "#FF9800", "#CD5C08"];
const icons = ["icon1", "icon2", "icon3", "icon4", "icon5"];
export async function POST(request) {
  try {
    const { name, teamId, description } = await request.json();
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("email");
    await connectMongodb();
    // Generate random color and icon
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    const data = await Project.create({
      name,
      teamId,
      owner: [email],
      description,
      color: randomColor,
      icon: randomIcon,
    });

    return NextResponse.json(
      { message: "Project created successfully", data: data },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error accurred while creating your Organization" },
      { status: 500 }
    );
  }
}
