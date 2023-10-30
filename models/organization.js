import mongoose, {Schema} from "mongoose";

const orgSchema = new Schema(
    {
org_name: {
    type: String,
    required: true,
},
createdBy: {
    type: String,
    required: true,
},
avater: {
    type: String,
},
description: {
    type: String,
},
admins: {
    type: [],
},
members: {
    type: [],
}
    },
    {
        timestamps: true,
    }
);

const Organization = mongoose.models?.Organization || mongoose.model("Organization", orgSchema);

export default Organization;