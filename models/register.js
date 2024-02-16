import mongoose, { Schema } from "mongoose";

const registerSchema = new Schema(
    {
        name : {
            type: String,
            require: true,
        },
        profilePicture : {
            type: String,
        },
        email : {
            type: String,
            require: true,
            unique: true,
        },
        password : {
           type: String,
           require: true 
        },
   
        verified: {
            type: Boolean,
            default: false,
        },
     
    },
    {
        timestamps: true,
    }
);

const Accounts = mongoose?.models?.Accounts || mongoose.model("Accounts", registerSchema);

export default Accounts;