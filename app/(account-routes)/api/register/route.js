import connectMongodb from "@/libs/mongodb/mongodb";
import Accounts from "@/models/register";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export async function POST(request) {
    try {
        const { name, email, password } = await request.json();
        const hashedPassword = await bcrypt.hash(password, 13); 
        await connectMongodb();
        await Accounts.create({ name, email, password: hashedPassword });
        return NextResponse.json({ message: "Account created successfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "An error accurred while creating your account" }, { status: 500 })

    }
}