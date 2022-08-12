// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // #1 Solution
  const reversedString = str.split("").reverse().join().replaceAll(",", "");
  return reversedString === str;
  // ===============================================================
  // #2 Solution
  // const strArr = str.split("");
  // return strArr.every((item, i) => item === strArr[strArr?.length - i - 1]);
}

module.exports = palindrome;
