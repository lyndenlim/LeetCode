/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let bottomRow = Array(n).fill(1)
    
    for (let i = 1; i < m; i++) {
        let previousRow = Array(n).fill(1)
        for (let j = n - 2; j >= 0; j--) {
            previousRow[j] = previousRow[j + 1] + bottomRow[j]
        }
        bottomRow = previousRow
    }
    
    return bottomRow[0]


};