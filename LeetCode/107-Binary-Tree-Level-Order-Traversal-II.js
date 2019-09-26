/**
 * 107. Binary Tree Level Order Traversal II
 *
 * Given a binary tree, return the bottom-up level order traversal of its nodes' values.
 * (ie, from left to right, level by level from leaf to root).
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 
 * return its bottom-up level order traversal as:
 * 
 * [
 *   [15,7],
 *   [9,20],
 *   [3]
 * ]
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree1 = new TreeNode(3);
const tree11 = new TreeNode(9);
const tree12 = new TreeNode(20);
const tree121 = new TreeNode(15);
const tree122 = new TreeNode(7);
tree1.left = tree11;
tree1.right = tree12;
tree11.left = null;
tree11.right = null;
tree12.left = tree121;
tree12.right = tree122;

const tree2 = new TreeNode(1);
const tree21 = new TreeNode(2);
const tree22 = new TreeNode(3);
const tree211 = new TreeNode(4);
const tree222 = new TreeNode(5);
tree2.left = tree21;
tree2.right = tree22;
tree21.left = tree211;
tree21.right = null;
tree22.left = null;
tree22.right = tree222;

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = root => {
  let result = [];
  let index = 0;
  const recursive = (node, index) => {
    if (!node) return;
    if (index >= result.length) result[index] = [];
    result[index].push(node.val);
    recursive(node.left, index + 1);
    recursive(node.right, index + 1);
  }
  recursive(root, index);
  return result.reverse();
};

console.log(levelOrderBottom(tree1)); // [[15,7], [9,20], [3]]
console.log(levelOrderBottom(tree2)); // [[4,5],[2,3],[1]]
