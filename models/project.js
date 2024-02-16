import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    status: String,
    color: String,
    icon: String,
    stared: Boolean,
    Stack: [String],
    teamId: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
    owner: [
      {
        type: String, // Change the type to String for storing email addresses
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models?.Project || mongoose.model("Project", projectSchema);

export default Project;
