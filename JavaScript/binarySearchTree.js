'use strict';

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // nodeの追加
  addNode(node) {
    // root nodeがなければparameterのnodeを一番上にする
    if (!this.root) {
      this.root = node;
      return;
    }

    // root node があれば、rootから辿っていく
    let current = this.root;
    let direction = node.value < current.value ? 'left' : 'rigth';
    while (current[direction]) {
      current = current[direction];
      direction = node.value < current.value ? 'left' : 'right';
    }

    current[direction] = node;
  }
}
