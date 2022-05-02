/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num > 9) {
        num = BigInt(num).toString().split("").map(n => parseInt(n)).reduce((a, b) => a + b)
    }
    return num
};