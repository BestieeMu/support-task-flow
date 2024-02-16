import mongoose, { Schema } from "mongoose";

const ticketSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Accounts' },
  title: String,
  description: String,
  status: { type: String, enum: ['Open', 'In Progress', 'Closed'], default: 'Open' },
  createdAt: { type: Date, default: Date.now },
  });
  
  const Ticket = mongoose.models?.Ticket || mongoose.model("Ticket", ticketSchema);
  
  export default Ticket;