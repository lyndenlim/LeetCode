/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let exponent = 0
    let nBaseThree = n
    while (nBaseThree >= 3) {
        exponent++
        nBaseThree = nBaseThree / 3
    }

    return Math.pow(3, exponent) === n
};