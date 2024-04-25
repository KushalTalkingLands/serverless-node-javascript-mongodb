const { insertName } = require('../dao/createNameDao');
module.exports.postName = async (event) => {
    const { name } = JSON.parse(event.body);
    const insertedId = await insertName(name);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Name inserted successfully', insertedId }),
    };
  };
// import { insertName } from "../dao/createNameDao";
// export const postName = async (event) => {
//     const { name } = JSON.parse(event.body);
//     const insertedId = await insertName(name);
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Name inserted successfully', insertedId }),
//     };
//   };