// import AWS from 'aws-sdk';

// // Create an instance of the S3 service
// const s3 = new AWS.S3();

// // Function to upload a file to S3
// export async function uploadFileToS3(fileData) {
//   try {
//     const params = {
//       Bucket: 'YOUR_S3_BUCKET_NAME',
//       Key: 'path/to/your/file.txt',
//       Body: fileData,
//       ContentType: 'text/plain',
//     };

//     const s3Response = await s3.upload(params).promise();
//     console.log('File uploaded to S3:', s3Response.Location);

//     // Return the S3 response
//     return s3Response;
//   } catch (error) {
//     console.error('Error uploading file to S3:', error);
//     throw error;
//   }
// }
const AWS = require('aws-sdk');

const s3 = new AWS.S3();
// Function to create an S3 bucket
async function createBucket(bucketName) {
    try {
        await s3.createBucket({ Bucket: bucketName }).promise();
        console.log('Bucket created:', bucketName);
    } catch (error) {
        console.error('Error creating bucket:', error);
        throw error;
    }
}

// Function to upload a file to S3
async function uploadFileToS3(fileData, fileName) {
    try {
        const bucketName = 'kushal-test-file-bucket';
        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: fileData,
            ContentType: 'text/plain',
        };

        try {
            // Upload the file to S3
            const s3Response = await s3.upload(params).promise();
            console.log('File uploaded to S3:', s3Response.Location);
            return s3Response;
        } catch (uploadError) {
            if (uploadError.code === 'NoSuchBucket') {
                console.log('Bucket does not exist. Creating the bucket:', bucketName);
                await createBucket(bucketName);
                return uploadFileToS3(fileData, fileName);
            } else {
                console.error('Error uploading file to S3:', uploadError);
                throw uploadError;
            }
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

module.exports = uploadFileToS3;