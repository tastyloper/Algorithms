/**
 * 101. Symmetric Tree
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 * 
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 *
 * But the following [1,2,2,null,3,null,3] is not:
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 *
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
 *
 * https://leetcode.com/problems/symmetric-tree/
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
const tree12 = new TreeNode(2);
const tree111 = new TreeNode(3);
const tree112 = new TreeNode(4);
const tree121 = new TreeNode(4);
const tree122 = new TreeNode(3);
tree1.left = tree11;
tree1.right = tree12;
tree11.left = tree111;
tree11.right = tree112;
tree12.left = tree121;
tree12.right = tree122;

const tree2 = new TreeNode(1);
const tree21 = new TreeNode(2);
const tree22 = new TreeNode(2);
const tree212 = new TreeNode(3);
const tree222 = new TreeNode(3);
tree2.left = tree21;
tree2.right = tree22;
tree21.left = null;
tree21.right = tree212;
tree22.left = null;
tree22.right = tree222;

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => compare(root, root);

/**
 * @param {TreeNode} tree_1
 * @param {TreeNode} tree_2
 * @return {boolean}
 */
const compare = (tree_1, tree_2) => {
  if (!tree_1 && !tree_2) {
    return true;
  }

  if (!tree_1 || !tree_2) {
    return false;
  }

  if (tree_1.val !== tree_2.val) {
    return false;
  }

  return compare(tree_1.left, tree_2.right) && compare(tree_1.right, tree_2.left);
}

console.log(isSymmetric(tree1));
console.log(isSymmetric(tree2));
