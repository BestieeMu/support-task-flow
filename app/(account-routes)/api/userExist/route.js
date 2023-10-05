import connectMongodb from "@/libs/mongodb/mongodb"
import Accounts from "@/models/register";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectMongodb();
        const { email } = await request.json();
        const user = await Accounts.findOne({ email }).select('_id');
      
        return NextResponse.json({ user })
    } catch (error) {
        console.log(error)
    }
}