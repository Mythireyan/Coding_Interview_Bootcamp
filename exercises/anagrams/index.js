// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// #1 Solution
// function anagrams(stringA, stringB) {
//   const formattedStringA = stringA.replace(/[^\w]/g, "")?.toLowerCase();
//   const formattedStringB = stringB.replace(/[^\w]/g, "")?.toLowerCase();

//   if (formattedStringA?.length === formattedStringB?.length) {
//     const obj1 = buildCharMap(formattedStringA);
//     const obj2 = buildCharMap(formattedStringB);

//     for (let char in obj1) {
//       if (obj1[char] === obj2[char]) {
//         return true;
//       }
//       return false;
//     }
//   }
//   return false;
// }

// function buildCharMap(string) {
//   let charMapObj = {};

//   for (let char of string) {
//     charMapObj[char] = charMapObj[char] + 1 || 1;
//   }
//   return charMapObj;
// }

// ===============================================================================
// #2 Solution
function anagrams(stringA, stringB) {
  return handleString(stringA) === handleString(stringB);
}

function handleString(string) {
  return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();
}

module.exports = anagrams;
