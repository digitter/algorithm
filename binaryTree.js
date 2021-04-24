'use strict';

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new BinaryTreeNode('A');
const b = new BinaryTreeNode('B');
const c = new BinaryTreeNode('C');
const d = new BinaryTreeNode('D');
const e = new BinaryTreeNode('E');

a.left = b;
a.right = c;
b.left = d;
b.right = e;

console.log(a.left.right.value);
