import mongoose, { Schema } from "mongoose";

const fileSchema = new Schema({
    name: String,
    path: String,
    teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Accounts' },
  });
  
  const File = mongoose.models?.File || mongoose.model("File", fileSchema);
  
  export default File;