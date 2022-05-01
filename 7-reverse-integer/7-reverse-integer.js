/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
 
     let numberAsStr = BigInt(x * Math.sign(x)).toString()
    let splitNum = numberAsStr.split("")
    let result = ""
    for (let num of splitNum) {
        result = num + result
    }
    if (BigInt(result * Math.sign(x)) < Math.pow(-2, 31) || BigInt(result * Math.sign(x)) > Math.pow(2, 31) - 1) {
        return 0
    } else {
        return BigInt(result * Math.sign(x))
    }
};