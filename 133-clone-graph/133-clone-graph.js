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
        
        let current = new Node(node.val)
        visited[node.val] = current
        
        for (let nei of node.neighbors) {
            current.neighbors.push(clone(nei))
        }
        
        return current
    }
    
    return clone(node)
};