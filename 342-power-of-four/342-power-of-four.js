/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let exponent = 0
    let nBaseFour = n
    while (nBaseFour >= 4) {
        exponent++
        nBaseFour = nBaseFour / 4
    }

    return Math.pow(4, exponent) === n
};