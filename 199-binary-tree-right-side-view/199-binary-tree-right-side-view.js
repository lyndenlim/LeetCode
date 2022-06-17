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
    let result = [] 
    let queue = [root] 
    
    while (queue.length) {
        let qlen = queue.length
        let rightSide = null
        
        for (let i = 0; i < qlen; i++) {
            let node = queue.shift()
            if (node) {
                rightSide = node
                queue.push(node.left)
                queue.push(node.right)
            }    
        }
        if (rightSide) {
            result.push(rightSide.val)
        }
    }
    
    return result
    
    
};