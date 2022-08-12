// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //#1 Solution
  //   const arr = str.split("");
  //   let obj = {};
  //   let max = 0;
  //   let maxChar = "";
  //   arr.map(
  //     (item, i) => (obj = { ...obj, [item]: obj[item] ? obj[item] + 1 : 1 })
  //   );
  //   for (let item in obj) {
  //     max = obj[item] > max ? obj[item] : max;
  //     maxChar = max === obj[item] ? item : maxChar;
  //   }
  //   return maxChar;
  // =======================================================================
  //#2 Solution
  let obj = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }
  for (let item in obj) {
    max = obj[item] > max ? obj[item] : max;
    maxChar = max === obj[item] ? item : maxChar;
  }
  return maxChar;
}

module.exports = maxChar;
