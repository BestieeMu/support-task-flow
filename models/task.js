import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    startDate: Date,
    dueDate: Date,
    status: String,
    labels: [String],
    subTask: [String],
    priority: String,
    attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
    assignedMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Accounts" }],
    assignee: [{ type: mongoose.Schema.Types.ObjectId, ref: "Accounts" }],
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    user: { type: String, ref: 'User' },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.models?.Task || mongoose.model("Task", taskSchema);

export default Task;
