const { connectToDatabase } = require('../../../utils/mongoHelper');

async function insertName(name) {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('names');
      const result = await collection.insertOne({ name });
      console.log('Name inserted:', name);
      return result.insertedId;
    } catch (error) {
      console.error('Error inserting name:', error);
      throw error;
    }
  }
  module.exports = {insertName}
// import { connectToDatabase } from "../../../utils/mongoHelper";
// export async function insertName(name) {
//     try {
//       const db = await connectToDatabase();
//       const collection = db.collection('names');
//       const result = await collection.insertOne({ name });
//       console.log('Name inserted:', name);
//       return result.insertedId;
//     } catch (error) {
//       console.error('Error inserting name:', error);
//       throw error;
//     }
//   }
