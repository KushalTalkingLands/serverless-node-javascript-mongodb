// index.js

// const { MongoClient } = require('mongodb');

// // Connection URI for MongoDB
// const uri = 'mongodb://localhost:27017/nametest';

// // Create a new MongoClient
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // Function to establish MongoDB connection
// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//     return client.db();
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     throw error;
//   }
// }

// // Function to close MongoDB connection
// // async function closeDatabaseConnection() {
// //   try {
// //     await client.close();
// //     console.log('MongoDB connection closed');
// //   } catch (error) {
// //     console.error('Error closing MongoDB connection:', error);
// //     throw error;
// //   }
// // }

// // Function to insert a name into MongoDB
// async function insertName(name) {
//   try {
//     const db = await connectToDatabase();
//     const collection = db.collection('names');
//     const result = await collection.insertOne({ name });
//     console.log('Name inserted:', name);
//     return result.insertedId;
//   } catch (error) {
//     console.error('Error inserting name:', error);
//     throw error;
//   }
// }

// // Function to retrieve all names from MongoDB
// async function getAllNames() {
//   try {
//     const db = await connectToDatabase();
//     const collection = db.collection('names');
//     const names = await collection.find({}).toArray();
//     console.log('Retrieved names:', names);
//     return names;
//   } catch (error) {
//     console.error('Error retrieving names:', error);
//     throw error;
//   }
// }

// // Export the handler function
// module.exports.handler = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: 'Go Serverless v3.0! Your function executed successfully!',
//         input: event,
//       },
//       null,
//       2
//     ),
//   };
// };

// // Export the postName function
// module.exports.postName = async (event) => {
//   const { name } = JSON.parse(event.body);
//   const insertedId = await insertName(name);
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: 'Name inserted successfully', insertedId }),
//   };
// };

// // Export the getName function
// module.exports.getName = async () => {
//   const names = await getAllNames();
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ names }),
//   };
// };

