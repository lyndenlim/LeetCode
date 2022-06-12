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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    
    let result = [] 
    let queue = [root]
    
    while (queue.length > 0) {
        let queueLen = queue.length
        let row = []
        for (let i = 0; i < queueLen; i++) {
            let currentNode = queue.shift()
            row.push(currentNode.val)
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }
        
        result.push(row)
    }
    return result
};