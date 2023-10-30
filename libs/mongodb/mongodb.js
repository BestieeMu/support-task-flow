import mongoose from "mongoose"
import dotenv from 'dotenv'; 
dotenv.config();

const connectMongodb = async () => {
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB"); // Add a log message to confirm the connection
        return mongoose.connection; // Return the Mongoose connection
    } catch (error) {
        console.log(error);
        throw error; // Rethrow the error to indicate that the connection failed
    }
}

export default connectMongodb;
