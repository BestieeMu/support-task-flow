import connectMongodb from "@/libs/mongodb/mongodb";
import Accounts from "@/models/register";
import jwt from "jsonwebtoken";


export async function GET(request) {
    
    try {
        const searchParams = request.nextUrl.searchParams;
        const token = searchParams.get("token");
       
        const { db } = await connectMongodb();
        const collection = db.collection("accounts");
    
        // Verify the token and extract the user ID
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const userId = decodedToken.userId;
        console.log(userId);
    
        // Find the user associated with the user ID and set their verified field to true
        if (userId) {
          await Accounts.updateOne({ _id: userId }, { $set: { verified: true } });
    
        }
      
        // Return the initial data to the client
        return Response.json({ message: "email verified", status: "ok" });
      } catch (error) {
        // Handle token verification error
        console.log("catch error",error);
        // If the error is due to an invalid token, return the "Invalid token" error response
        return Response.json({ message: "Internal server error", status: "error" });
      }
}
