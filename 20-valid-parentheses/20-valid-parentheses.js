/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !==0) return false
    
    let parentheses = {"{": "}", "[":"]", "(":")"}
    let bracketArray = []
    for (bracket of s) {
        if (bracket in parentheses) {
            bracketArray.push(bracket)
        } else if (bracket !== parentheses[bracketArray.pop()]) {
            return false
        }
    }
    return bracketArray.length === 0;
};