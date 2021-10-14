// 1. 基準pivotを決める。
// 2. 配列の前半に『pivotより小さい値』を集める。
// 3. 配列の前半と後半にそれぞれ quick sort を行う。

'use strict';

function quickSort(startID, endID) {
  //範囲の間にある値をピポットに設定する。(小数点切り捨て)
  let pivot = a[Math.floor((startID + endID) / 2)];
  //引数を左端、右端として変数にいれる
  let left = startID;
  let right = endID;

  //ピポットより小さい値を左側へ、大きい値を右側へ分割する
  while (true) {
    //leftの値がpivotより小さければleftを一つ右へ移動する
    while (a[left] < pivot) left++;
    //rightの値がpivotより小さければrightを一つ左へ移動する
    while (pivot < a[right]) right--;
    //leftとrightの値がぶつかったら、そこでグループ分けの処理を止める。
    if (left >= right) break;
    //rightとrightの値がぶつかっていない場合、leftとrightを交換
    [a[left], a[right]] = [a[right], a[left]]
    //交換後にleftを後ろへ、rightを前へ一つ移動する
    left++;
    right--;
  }

  //左側に分割できるデータがある場合、quickSort関数を呼び出して再帰的に処理を繰り返す。
  if (startID < left - 1) quickSort(startID, left - 1);
  //右側に分割できるデータがある場合、quickSort関数を呼び出して再帰的に処理を繰り返す。
  if (right + 1 < endID) quickSort(right + 1, endID);
}

//未整列の配列
var a = [3, 7, 2, 4, 6, 1, 9, 8, 5];
//先頭から末尾までソートする
quickSort(0, a.length - 1);

//結果の表示    
console.log(a);

