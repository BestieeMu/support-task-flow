import connectMongodb from "@/libs/mongodb/mongodb";
import Organization from "@/models/organization";

export async function GET(request) {
   await connectMongodb();

  // Create a change stream to watch for changes
  const changeStream = Organization.watch();

  // Listen for changes
  changeStream.on('change', async (change) => {
    // The 'change' object contains information about the change in the database

    if (change.operationType === 'insert') {
      // Fetch the updated data after a change
    const updatedData = await Organization.find();

    // Return the updated data to the client
    return Response.json({ data: updatedData });
      }


      
   
  });

  // Fetch initial data
  const data = await Organization.find();

  // Return the initial data to the client
  return Response.json({ data });
}
