import connectMongodb from "@/libs/mongodb/mongodb";
import Organization from "@/models/organization";
import Accounts from "@/models/register";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { org_name, createdBy, avater, description, admins } = await request.json();
        await connectMongodb();
       const data = await Organization.create({ org_name, createdBy, avater,description, admins });

       if(data){
        await Accounts.updateOne(
            { _id: data.createdBy },
            { $push: { createdOrganizations: data._id } }
          );
       }

        return NextResponse.json({ message: "Organization created successfully", data: data._id }, { status: 201 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "An error accurred while creating your Organization" }, { status: 500 })

    }
}