/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let result = []
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            result.push(i)
        }
    }
    if (result.length !==0) {
        return result.reduce((prev, current) => prev + current) === num
    } else {
        return false
    }
};