'use strict';

// 二分木のノード
class BinaryTreeNode {
  constructor(value) {
    // そのノードの値
    this.value = value;

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
}

const bst = new BinarySearchTree
const arr = [50, 10, 80, 5, 30]
arr.forEach(e => bst.addNode(new BinaryTreeNode(e)))

console.log(bst.root.right.value)
console.log(bst.root.left.value)

