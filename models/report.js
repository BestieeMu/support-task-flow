import mongoose, { Schema } from "mongoose";

const reportSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Accounts' },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    reports: [String],
    status: String,
    createdAt: { type: Date, default: Date.now },
  });
  
  const Report = mongoose.models?.Report || mongoose.model("Report", reportSchema);
  
  export default Report;