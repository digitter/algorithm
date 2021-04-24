'use strict';

function bubbleSort(array) {
  // 4
  const n = array.length - 1;

  for(let end = n; end > 0; end--) { // end => 4.3,2,1
    for(let i = 0; i < end; i++) { // i => 0,1,2,3,0,1,2,0,1,0
      if (array[i] > array[i+1]) {
        [array[i], array[i+1]] = [array[i+1], array[i]];
      }
    }
  }
}

const array = [7, 5, 10, 3, 4];
bubbleSort(array);
console.log(array);
