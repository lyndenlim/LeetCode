/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num ===1 ){
        return false
    }
    let result = 1
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            result += i
        }
    }
    return result === num
};