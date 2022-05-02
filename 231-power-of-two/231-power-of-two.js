/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
let exponent = 0
    let newN = n
    while (newN >= 2) {
        exponent++
        newN = newN / 2
    }

    return Math.pow(2, exponent) === n
    
};