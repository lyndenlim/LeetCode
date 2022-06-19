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
 * @return {boolean}
 */
var isBalanced = function(root) {
  let balanced = true
  
  function getHeight(node) {
      if (!node) return 0
      
      let left = getHeight(node.left)
      let right = getHeight(node.right)
      
      if (Math.abs(left - right) > 1) balanced = false
      
      return Math.max(left, right) + 1 
  }
    
    getHeight(root)
    return balanced
};