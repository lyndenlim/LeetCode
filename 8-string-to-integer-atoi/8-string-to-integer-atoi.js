/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let sign = 1
    let i = 0 
    let result = 0
    
    while (s[i] === " ") i++
    
    if (s[i] === "+") {
        i++;
    } else if (s[i] === "-" ) {
        sign = -1
        i++;
    }
    
    while (s[i] >= "0" && s[i] <= "9"){
        result = result * 10 + (s[i] - 0)
        
        if (result * sign >= Math.pow(2,31) - 1) return Math.pow(2,31) - 1
        if (result * sign <= Math.pow(-2,31)) return Math.pow(-2,31)
        i++
    }
    
    return result * sign 
        
};