'use strict';

function bubbleSort(array) {
  const n = array.length - 1;

  for (let end = n; end > 0; end--) {
    for (let i = 0; i < end; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }
}

const array = [7, 5, 10, 3, 4];
bubbleSort(array);
console.log(array);

// const bubbleSort = (array) => {
//   const n = array.length;
//   for (let end = 0; end < n; end++) {
//     for (let i = 0; i < n; i++) {
//       if (array[i] > array[i + 1]) {
//         [array[i], array[i + 1]] = [array[i + 1], array[i]]
//       }
//     }
//   }
// }
// 
// const array = [7, 5, 10, 3, 4];
// bubbleSort(array);
// console.log(array);

