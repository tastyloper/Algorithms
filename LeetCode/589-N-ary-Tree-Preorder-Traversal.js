/**
 * 589. N-ary Tree Preorder Traversal
 *
 * Given an n-ary tree, return the preorder traversal of its nodes' values.
 * 
 * For example, given a 3-ary tree:
 * 
 * Return its preorder traversal as: [1,3,5,6,2,4].
 * 
 * Note:
 * Recursive solution is trivial, could you do it iteratively?
 *
 * https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
function Node(val,children) {
  this.val = val;
  this.children = children;
};
const node23 = new Node(4, []);
const node22 = new Node(2, []);
const node212 = new Node(6, []);
const node211 = new Node(5, []);
const node21 = new Node(3, [node211, node212]);
const node1 = new Node(1, [node21, node22, node23]);

/**
 * @param {Node} root
 * @return {number[]}
 */
const preorder = (root) => {
  const result = [];
  const traverse = (tree) => {
    if (!tree) {
      return result;
    }
    result.push(tree.val);
    for(let i = 0; i < tree.children.length; i++) {
      traverse(tree.children[i]);
    }
    return result;
  }
  return traverse(root)
};

console.log(preorder(node1)); // [1,3,5,6,2,4]
