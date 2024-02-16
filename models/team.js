import mongoose, { Schema } from "mongoose";

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
     description: {
      type: String,
    },
    stared: Boolean,
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Accounts" }],
    admins: [
      {
        type: String, // Change the type to String for storing email addresses
      },
    ],
    
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.models?.Team || mongoose.model("Team", teamSchema);

export default Team;
