// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverseStr(str) {
  // #1 Solution
  return str.split("").reverse().join().replaceAll(",", "");
  //   ====================================================================
  // #2 Solution
  //   const stringArr = str.split("");
  //   const solutionArr = [];
  //   for (let i = stringArr?.length - 1; i >= 0; i--) {
  //     solutionArr.push(stringArr[i]);
  //   }
  //   return solutionArr?.join().replaceAll(",", "");
  //   ====================================================================
  // #3 Solution
  //   let reversed = "";
  //   for (let character of str) {
  //     reversed = character + reversed;
  //   }
  //   return reversed;
  //   ====================================================================
  // #4 Solution
  //   const stringArr = str.split("");
  //   return stringArr.reduce((rev, char) => char + rev, "");
}

module.exports = reverseStr;
