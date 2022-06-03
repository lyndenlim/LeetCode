/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // we can check the vals of each node to see how they compare against the current node 
    // if both p and q are greater than the current node, we just have to check the right side 
    // if they are both less than the current node, check the left
    // once there's a diversion/the else case we can just return the current node as the lowest common ancestor
    
    while (root) {
        if (root.val < p.val && root.val < q.val) {
            root = root.right
        } else if (root.val > p.val && root.val > q.val) {
            root = root.left
        } else {
            return root
        }
    }
    
};