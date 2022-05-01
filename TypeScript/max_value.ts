/*
  Return maximum value
  Comparison with IMPERATIVE PROGRAMMING and FUNCTIONAL PROGRAMMING
*/

// const maxValue = (arr: number[]): number => {
//   let result = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > result) {
//       result = arr[i];
//     }
//   }
//   return result;
// }

// console.log(maxValue([1, 2, 3]));

// const maxValue = ([x, ...rest]: number[]): number => rest.length === 0
//   ? x
//   : (x > maxValue(rest) ? x : maxValue(rest));

// console.log(maxValue([1, 2, 3]));

/* Reduce */
const sumWithInitial = (arr: number[]) => arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

console.log(sumWithInitial([1, 2, 3]));
