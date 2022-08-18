// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // #1 Solution
  //   const stringArr = str.split(" ");
  //   const capitalizedArr = stringArr?.map((word) => {
  //     const firstLetter = word[0]?.toUpperCase();
  //     const slicedWord = word.slice(1);
  //     return firstLetter + slicedWord;
  //   });
  //   const result = capitalizedArr?.join(" ");
  //   return result;

  //==========================================================================
  // #2 Solution
  //   const wordsArr = [];
  //   const stringArr = str.split(" ");
  //   for (let word of stringArr) {
  //     wordsArr.push(word[0]?.toUpperCase() + word.slice(1));
  //   }
  //   return wordsArr?.join(" ");

  //==========================================================================
  // #3 Solution
  let result = "";
  for (let char in str) {
    if (result[result.length - 1] === " " || !result) {
      result = result + str[char]?.toUpperCase();
    } else {
      result = result + str[char];
    }
  }
  return result;
}

module.exports = capitalize;
