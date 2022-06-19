/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let result = 0
    let idx = 0 
    let sign = 1 
    
    while (s[idx] === " ") idx++;
    
    if (s[idx] === "+") {
        idx++;
    } else if (s[idx] === "-") {
        sign = -1 
        idx++;
    }
    
    while (s[idx] >= "0" && s[idx] <= "9") {
        result = result * 10 + (s[idx] - 0)
        if (result * sign >= Math.pow(2, 31) - 1) return Math.pow(2,31) -1
        if (result * sign <= Math.pow(-2, 31)) return Math.pow(-2,31)
        idx++
    }
    
    return result * sign
};