import connectMongodb from "@/libs/mongodb/mongodb"
import Accounts from "@/models/register";
import { NextResponse } from "next/server";

export async function POST(request) {
try {
  const { email} = await request.json();
  await connectMongodb()
   const data = await Accounts.findOne({ email: email });
    // console.log(data);
   
    return Response.json({ data })
} catch (error) {
  return NextResponse.json({ message: "An error accured while creating your Organization" }, { status: 404 })
}
  }