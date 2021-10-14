// 1. 基準pivotを決める。
// 2. 配列の前半に『pivotより小さい値』を集める。
// 3. 配列の前半と後半にそれぞれ quick sort を行う。

'use strict';

// 配列をクイックソートする関数
function quickSort(array, start, end) {
  // indexがstartとendが逆転していたら終わり。
  if (end <= start) return;

  // 今回はpivotはstartとする。
  const pivot = array[start];

  let left = start;
  let right = end;

  while (true) {
    // pivot以上の値を左から探すまで右に移動
    while (array[left] < pivot) { left++; }
    // pivot以下の値を右から探すまで左に移動
    while (array[right] > pivot) { right--; }

    // leftとrightが逆転したらwhileを抜ける(衝突したら)
    if (right <= left) { break };

    [array[left], array[right]] = [array[right], array[left]]; // 値の入れ替え

    left++;
    right--;
  }

  // 配列の前半と後半をそれぞれクイックソート
  quickSort(array, start, left - 1); // 衝突したので左へ移動
  quickSort(array, right + 1, end); // 衝突したので右へ移動
}

const array = [10, 7, 1, 6, 12, 10, 8, 9];
quickSort(array, 0, array.length - 1);
console.log("Result: ", array);

