/**
 * 104. Maximum Depth of Binary Tree
 *
 * Given a binary tree, find its maximum depth.
 * 
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * 
 * Note: A leaf is a node with no children.
 *
 * Example 1:
 * Given binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * return its depth = 3.
 *
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
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

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = root => !root ? 0 : Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;

console.log(maxDepth(tree1));
