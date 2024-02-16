import connectMongodb from "@/libs/mongodb/mongodb";

import { NextResponse } from "next/server";
import Team from "@/models/team";

export async function POST(request) {
  try {
    const { name, description, members } = await request.json();
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("email");
    await connectMongodb();
    const data = await Team.create({
      name,
      description,
      members,
      admins: [email],
    });
    console.log("team created");
    return NextResponse.json(
      { message: "Team created successfully", data: data },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error accurred while creating your Team" },
      { status: 500 }
    );
  }
}
