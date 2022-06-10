/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let visited = {}
    
    function clone(node) {
        if (!node) return node
        
        if (visited[node.val]) return visited[node.val]
        
        let head = new Node(node.val)
        visited[node.val] = head 
        
        for (let neighbor of node.neighbors) {
            head.neighbors.push(clone(neighbor))
        }
        
        return head
    }
    
    return clone(node)
};