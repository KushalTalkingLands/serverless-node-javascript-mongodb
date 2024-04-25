const { getAllNames } = require('../dao/getNameDao');
module.exports.getName = async () => {
    const names = await getAllNames();
    return {
      statusCode: 200,
      body: JSON.stringify({ names }),
    };
  };

// import { getAllNames } from "../dao/getNameDao";
// export const getName = async () => {
//     const names = await getAllNames();
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ names }),
//     };
//   };