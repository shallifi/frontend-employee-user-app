export function convertToSnakeCase(obj) {
    const snakeCaseObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const snakeCaseKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
        snakeCaseObj[snakeCaseKey] = obj[key];
      }
    }
    return snakeCaseObj;
  }
  export default convertToSnakeCase;
//this function is used to convert the object keys to snake case  