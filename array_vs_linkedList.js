'use strict';

// 連結リストの要素
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 連結リスト
class LinkedList {
  constructor() {
    this.head = null;
  }
  // 末尾に要素を追加する
  push(value) {
    const node = new LinkedListNode(value);
    if(!this.head) { // 先頭が無い場合
      this.head = node; // 新しいnodeを先頭に設定
      return;
    }
    let current = this.head;
    // nodeにnextがある場合、currentが最後の要素になるまでループ
    while(current.next) { current = current.next }
    // 一番最後のnodeのnextに現在のnodeを設定
    current.next = node;
  }
  // 先頭に要素を追加する
  unshift(value) {
    const node = new LinkedListNode(value);
    node.next = this.head; // 先頭のnextにheadを設定
    this.head = node; // headに現在のnodeを設定
  }
  // 文字列化
  toString() {
    const array = [];
    let current = this.head;
    while(current) {
      array.push(current.value);
      current = current.next;
    }
    return array.toString();
  }
}

// callback関数を100回実行した時にかかる時間を計測する関数
function measureTime(func) {
  const startTime = performance.now(); // 開始時間
  for(let i = 0; i < 100; i++) { func(); }

  const endTime = performance.now(); // 終了時間
  const elapsedTime = endTime - startTime; // 経過時間
  return elapsedTime;
}

// 配列の末尾に値を追加する
function arrayPush() {
  const array = [];
  for(let i = 0; i < 1000; i++) {
    array.push(i);
  }
}
// 配列の先頭に値を追加する
function arrayUnshift() {
  const array = [];
  for(let i = 0; i < 1000; i++) {
    array.unshift(i);
  }
}
// 連結リストの末尾に値を追加する
function linkedListPush() {
  const list = new LinkedList();
  for(let i = 0; i < 1000; i++) {
    list.push(i);
  }
}
// 連結リストの先頭に値を追加する
function linkedListUnshift() {
  const list = new LinkedList();
  for(let i = 0; i < 1000; i++) {
    list.unshift(i);
  }
}

// それぞれ計測する
const arrayPushTime = measureTime(arrayPush);
const arrayUnshiftTime = measureTime(arrayUnshift);
const linkedListPushTime = measureTime(linkedListPush);
const linkedListUnshiftTime = measureTime(linkedListUnshift);
// 結果を表示する
console.log(`Array.push         ${arrayPushTime.toFixed(2).padStart(10)}`);
console.log(`Array.unshift      ${arrayUnshiftTime.toFixed(2).padStart(10)}`);
console.log('------------------------------')
console.log(`LinkedList.push    ${linkedListPushTime.toFixed(2).padStart(10)}`);
console.log(`LinkedList.unshift ${linkedListUnshiftTime.toFixed(2).padStart(10)}`);
