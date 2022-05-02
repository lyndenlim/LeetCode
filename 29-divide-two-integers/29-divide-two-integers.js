/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
   let quotient = dividend/divisor
    if (quotient > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1
    } else if (quotient < -Math.pow(2, 31)) {
        return -Math.pow(2, 31)
    } else {
        if (quotient < 0) {
            return Math.ceil(quotient) 
        } else {
            return Math.floor(quotient)
        }
    }
};