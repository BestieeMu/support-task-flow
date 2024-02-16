import mongoose, { Schema } from "mongoose";

const invitationSchema = new Schema({
    teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    inviterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Accounts' },
    email: { type: String, required: true },
    status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
    invitationToken: String,
  });
  
  const Invitation = mongoose.models?.Invitation || mongoose.model("Invitation", invitationSchema);
  
export default  Invitation;