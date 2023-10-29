import connectMongodb from "@/libs/mongodb/mongodb"
import Accounts from "@/models/register";

export async function POST(request) {
try {
  const { email} = await request.json();
  await connectMongodb()
   const data = await Accounts.findOne({ email: email });
    // console.log(data);
   
    return Response.json({ data })
} catch (error) {
  
}
  }