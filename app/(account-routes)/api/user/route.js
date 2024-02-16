import connectMongodb from "@/libs/mongodb/mongodb";
import Accounts from "@/models/register";



export async function GET(request) {
    
    try {
        const searchParams = request.nextUrl.searchParams;
        const email = searchParams.get("email");
        await connectMongodb();
       
        // Find the user associated with the user ID and set their verified field to true
        if (email) {

            const user = await Accounts.findOne({ email }, "-password");
                       
            // Return the initial data to the client
        return Response.json({ message: "current user",  data: user, status: "ok" });
        }
      
        
      } catch (error) {
        // Handle token verification error
        console.log("catch error",error);
        // If the error is due to an invalid token, return the "Invalid token" error response
        return Response.json({ message: "Internal server error",  status: "error" });
      }
}
