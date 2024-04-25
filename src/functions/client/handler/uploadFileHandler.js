// import { uploadFileToS3 } from "../../../utils/s3Helper";

// export async function uploadFile(event) {
//     try {
//         // Extract file data from event (e.g., file content, name, etc.)
//         const fileData = event.body; // Adjust this based on your actual event structure
        
//         // Upload file to S3
//         const s3Response = await uploadFileToS3(fileData);

//         // Return success response
//         return {
//             statusCode: 200,
//             body: JSON.stringify({ message: 'File uploaded successfully', s3Response }),
//         };
//     } catch (error) {
//         console.error('Error uploading file to S3:', error);
//         throw error;
//     }
// }
const uploadFileToS3 = require("../../../utils/s3Helper");

async function uploadFile(event) {
    try {
        // Extract file data from event (e.g., file content, name, etc.)
        console.log("Extracting file",event.body)
        const fileData = event.body; // Adjust this based on your actual event structure
        const fileName = 'sample/file.txt'; // Example file name
        
        // Upload file to S3
        const s3Response = await uploadFileToS3(fileData, fileName);
        let path = s3Response.Location

        // Return success response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'File uploaded successfully',path }),
        };
    } catch (error) {
        console.error('Error uploading file to S3:', error);
        throw error;
    }
}

module.exports = { uploadFile };