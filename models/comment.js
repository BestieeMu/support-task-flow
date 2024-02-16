import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Accounts' },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    reportId: { type: mongoose.Schema.Types.ObjectId, ref: 'Report' },
    TaskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Report' },
    reports: [String],
    status: String,
    createdAt: { type: Date, default: Date.now },
  });
  
  const Comment = mongoose.models?.Comment || mongoose.model("Comment", commentSchema);
  
  export default Comment;