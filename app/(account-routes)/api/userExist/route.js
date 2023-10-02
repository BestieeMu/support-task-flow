import connectMongodb from "@/libs/mongodb/mongodb"
import Accounts from "@/models/register";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        await connectMongodb(req);
        const { email } = await req.json();
        const user = await Accounts.findOne({ email }).select('_id');
        console.log("this is the use:", user);
        return NextResponse.json({ user })
    } catch (error) {
        console.log(error)
    }
}