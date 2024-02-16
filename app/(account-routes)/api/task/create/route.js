import connectMongodb from "@/libs/mongodb/mongodb";

import Accounts from "@/models/register";
import { NextResponse } from "next/server";
import Task from "@/models/task";

export async function POST(request) {
    try {
        const { title, description, startDate, dueDate, status, labels, subTask, priority, attachments, assignedMembers, projectId } = await request.json();
        const searchParams = request.nextUrl.searchParams;
        const email = searchParams.get("email");
        await connectMongodb();
        const data = await Task.create({ title, description, startDate, dueDate, status, labels, subTask, priority, attachments, assignedMembers, user: email, project: projectId });

if (userId) {
    return NextResponse.json({ message: "Personal Task created successfully", data: data._id }, { status: 201 })
} else if(projectId){
    return NextResponse.json({ message: "Project Task created successfully", data: data._id }, { status: 201 })
}
return NextResponse.json({ message: "Task created successfully", data: data._id }, { status: 201 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "An error accurred while creating your Task" }, { status: 500 })

    }
}