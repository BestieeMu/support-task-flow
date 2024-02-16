import connectMongodb from "@/libs/mongodb/mongodb"
import Accounts from "@/models/register";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
      await connectMongodb();
      
      const user = await Accounts.find({}, '-password');
    console.log('users fetched');
      return NextResponse.json({ message: 'users fetched successful', data: user })
  } catch (error) {
      console.log(error)
  }
}