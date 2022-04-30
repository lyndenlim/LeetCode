/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    
    let divisors = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i)
        }
    }

    if (divisors.length === 3) {
        return true
    } else {
        return false
    }
};