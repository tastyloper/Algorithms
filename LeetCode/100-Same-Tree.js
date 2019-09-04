/**
 * 100. Same Tree
 *
 * Given two binary trees, write a function to check if they are the same or not.
 * 
 * Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
 *
 * Example 1:
 * Input: [1,2,3], [1,2,3]
 * Output: true
 *
 * Example 2:
 * Input: [1,2], [1,null,2]
 * Output: false
 *
 * Example 3:
 * Input: [1,2,1], [1,1,2]
 * Output: false
 *
 * https://leetcode.com/problems/same-tree/
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

const tree1 = new TreeNode(1);
const tree11 = new TreeNode(2);
const tree12 = new TreeNode(3);
tree1.left = tree11;
tree1.right = tree12;

const tree2 = new TreeNode(1);
const tree21 = new TreeNode(2);
const tree22 = new TreeNode(3);
tree2.left = tree21;
tree2.right = tree22;

const tree3 = new TreeNode(1);
const tree31 = new TreeNode(2);
tree3.left = tree31;

const tree4 = new TreeNode(1);
const tree41 = new TreeNode(2);
tree4.left = null;
tree4.right = tree41;

const tree5 = new TreeNode(1);
const tree51 = new TreeNode(2);
const tree52 = new TreeNode(1);
tree5.left = tree31;
tree5.right = tree52;

const tree6 = new TreeNode(1);
const tree61 = new TreeNode(1);
const tree62 = new TreeNode(2);
tree6.left = tree61;
tree6.right = tree62;

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  if (p == null && q == null) return true;
  if (q == null || p == null) return false;
  if (p.val != q.val) return false;
  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};

console.log(isSameTree(tree1, tree2));
console.log(isSameTree(tree3, tree4));
console.log(isSameTree(tree5, tree6));
