/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    const numberAsString = BigInt(num).toString()
    const firstReversal = parseInt(numberAsString.split("").reverse().join(""))
    const firstReversalAsString = BigInt(firstReversal).toString()
    const secondReversal = parseInt(firstReversalAsString.split("").reverse().join(""))

    return secondReversal === num
};