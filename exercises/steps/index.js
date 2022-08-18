// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//#1 Solution
// let arr = [];
// let string = "#";
// for (let i = 1; i <= n; i++) {
//   arr = [];
//   for (let j = 1; j <= n; j++) {
//     if (j <= i) {
//       arr.push(string);
//     } else {
//       arr.push(" ");
//     }
//   }
//   console.log(arr.join(""));
// }
// ============================================================================
// #2 Solution
// for (let i = 1; i <= n; i++) {
//   let string = "";
//   for (let j = 1; j <= n; j++) {
//     if (j <= i) {
//       string += "#";
//     } else {
//       string += " ";
//     }
//   }
//   console.log(string);
// }
// ============================================================================
// #3 Solution
// for (let i=1;i<=n;i++){
//   let string = ''
//   if(i===n){
//     return;
//   }else{
//     if(string?.length === n){
//       steps(n)
//     }else{
//       string+="#"
//     }
//   }
// }
// }

// RECURSIVE FUNCTION
function steps(n, row = 0, string = "") {
  if (row === n) {
    return;
  }

  if (n === string?.length) {
    console.log(string);
    return steps(n, row + 1);
  }

  if (string?.length <= row) {
    string += "#";
  } else {
    string += " ";
  }

  return steps(n, row, string);
}

module.exports = steps;
