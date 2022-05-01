/*
  Reverse elements in array
  Comparison with IMPERATIVE PROGRAMMING and FUNCTIONAL PROGRAMMING
*/

// const reversedArray = (arr: number[]): number[] => {
//   const result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   return result;
// }

const reversedArray = ([x, ...rest]: number[]): number[] => x === undefined
  ? []
  : [...reversedArray(rest), x];

console.log(reversedArray([1, 2, 3]));
