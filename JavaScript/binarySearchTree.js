'use strict';

// 二分木のノード
class BinaryTreeNode {
  constructor(value) {
    this.value = value; // そのノードの値
    // 左の子ノードと右の子ノード
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  addNode(node) {
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    let direction = node.value < current.value ? 'left' : 'right';

    while (current[direction]) {
      current = current[direction];
      direction = node.value < current.value ? 'left' : 'right';
    }

    current[direction] = node;
  }

  include(value) {
    if (this.root.value === value) return true;

    let current = this.root
    let direction = value < current.value ? 'left' : 'right';
    while (current[direction]) {
      current = current[direction];
      if (value == current.value) return true;
      direction = value < current.value ? 'left' : 'right';
    }

    return false
  }
}

// 二分探索きの構造を確認
const bst = new BinarySearchTree
const arr = [50, 10, 80, 5, 30]
arr.forEach(e => bst.addNode(new BinaryTreeNode(e)))

console.log(bst.root.right.value)
console.log(bst.root.left.value)
// ---------------------------------------

// 数値の検索
console.log(bst.include(50)) // true
console.log(bst.include(10)) // true
console.log(bst.include(2)) // false
console.log(bst.include(0)) // false
// ---------------------------------------

// 配列と二分探索木の検索パフォーマンスの比較
const dataNum = 100 * 10000;
const array = [];
const tree = new BinarySearchTree();
const searchTargetValue = 2;

// 配列と二分探索木にデータを追加
for (let i = 0; i < dataNum; i++) {
  const value = Math.random()
  array.push(value);
  tree.addNode(new BinaryTreeNode(value));
}

// 配列
let arraySteps = 0;
for (let i = 0; i < dataNum; i++) {
  arraySteps++;
  // もし値が見つかったら抜ける
  if (array[i] === searchTargetValue) break;
}

// 二分探査木
let treeSteps = 0;
let current = tree.root;
while (current) {
  treeSteps++;
  if (current === searchTargetValue) break;

  current = searchTargetValue < current.value ? current.left : current.right;
}

console.log(`配列の探索には ${arraySteps} ステップかかりました`);
console.log(`二分探索木の探索には ${treeSteps} ステップかかりました`);

