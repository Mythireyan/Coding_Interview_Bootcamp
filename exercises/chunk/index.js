// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // #1 Solution
  // const chunckedArr = [];

  // for (let item of array) {
  //   const lastElement = chunckedArr?.length - 1;

  //   if (lastElement < 0 || chunckedArr[lastElement]?.length === size) {
  //     chunckedArr?.push([item]);
  //   } else {
  //     chunckedArr[lastElement] = [...chunckedArr[lastElement], item];
  //   }
  // }
  // return chunckedArr;

  // ======================================================================================
  // #2 Solution
  // const chunckedArr = [];

  // for (let num of array) {
  //   lastItem = chunckedArr[chunckedArr?.length - 1];

  //   if (!lastItem || lastItem?.length === size) {
  //     chunckedArr?.push([num]);
  //   } else {
  //     lastItem.push(num);
  //   }
  // }
  // return chunckedArr;

  // ======================================================================================
  // #3 Solution
  const chunckedArr = [];

  let startIndex = 0;
  while (startIndex <= array.length - 1) {
    chunckedArr.push(array.slice(startIndex, startIndex + size));
    startIndex = startIndex + size;
  }
  return chunckedArr;
}

module.exports = chunk;
