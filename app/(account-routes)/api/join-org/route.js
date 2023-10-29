import connectMongodb from "@/libs/mongodb/mongodb";
import Organization from "@/models/organization";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {  createdBy, previewId} = await request.json();
        await connectMongodb();
      
        await Organization.updateOne(
            { _id: previewId },
            { $push: { members: createdBy } }
          );

        return NextResponse.json({ message: "You are now a member of this organization" }, { status: 201 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "An error accurred while creating your Organization" }, { status: 500 })

    }
}