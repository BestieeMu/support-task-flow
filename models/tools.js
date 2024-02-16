import mongoose, { Schema } from "mongoose";

const toolsSchema = new Schema(
  {
//   tools data here
  },
  {
    timestamps: true,
  }
);

const Tools = mongoose.models?.Tools || mongoose.model("Tools", toolsSchema);

export default Tools;
