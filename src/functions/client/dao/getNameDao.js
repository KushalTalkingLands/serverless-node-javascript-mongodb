const { connectToDatabase } = require('../../../utils/mongoHelper');

async function getAllNames() {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('names');
      const names = await collection.find({}).toArray();
      console.log('Retrieved names:', names);
      return names;
    } catch (error) {
      console.error('Error retrieving names:', error);
      throw error;
    }
}

module.exports = {getAllNames};
// import { connectToDatabase } from "../../../utils/mongoHelper";
// export async function getAllNames() {
//     try {
//       const db = await connectToDatabase();
//       const collection = db.collection('names');
//       const names = await collection.find({}).toArray();
//       console.log('Retrieved names:', names);
//       return names;
//     } catch (error) {
//       console.error('Error retrieving names:', error);
//       throw error;
//     }
// }