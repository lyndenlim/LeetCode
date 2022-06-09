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
    // bfs 
    // create queue and we'll initialize it with the root node
    // as long as there's something in the queue to be processed we can remove the first node and then add the children node to the queue 
    // we can keep track of the levels by taking the length of the queue 
    
        if (!root) return []
    
        let queue = [root]
        let result = []
        
        while (queue.length > 0) {
            let qlen = queue.length
            let rows = []
            for (let i = 0; i < qlen; i++) {
                let currentNode = queue.shift()
                rows.push(currentNode.val)
                if (currentNode.left) queue.push(currentNode.left)
                if (currentNode.right) queue.push(currentNode.right)
            }
            result.push(rows)
        }
        return result
};