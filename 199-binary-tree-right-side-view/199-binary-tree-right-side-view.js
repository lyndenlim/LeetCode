/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result = [];

  function getRightSide(node, level) {
    if (!node) return [];

    result[level] = node.val;
    let left = getRightSide(node.left, level + 1);
    let right = getRightSide(node.right, level + 1);
  }

  getRightSide(root, 0);

  return result;
};