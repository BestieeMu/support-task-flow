import mongoose, { Schema } from "mongoose";

const registerSchema = new Schema(
    {
        name : {
            type: String,
            require: true,
        },
        email : {
            type: String,
            require: true,
        },
        password : {
           type: String,
           require: true 
        }
    },
    {
        timestamps: true,
    }
);

const Accounts = mongoose.models.Accounts || mongoose.model("Accounts", registerSchema);

export default Accounts;