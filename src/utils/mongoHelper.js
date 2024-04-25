const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/nametest';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

// export async function closeDatabaseConnection() {
//   try {
//     await client.close();
//     console.log('MongoDB connection closed');
//   } catch (error) {
//     console.error('Error closing MongoDB connection:', error);
//     throw error;
//   }
// }

module.exports = {connectToDatabase}
// import { MongoClient } from 'mongodb';

// // Define URI
// const uri = 'url';

// // Create a new MongoClient instance
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // Function to connect to the database
// export async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//     return client.db();
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     throw error;
//   }
// }