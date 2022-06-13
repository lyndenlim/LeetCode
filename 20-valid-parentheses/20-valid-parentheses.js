/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let parentheses = {"{":"}", "[":"]", "(":")"}
    let parenthesesArray = []
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] in parentheses) {
            parenthesesArray.push(s[i])
        } else if (parentheses[parenthesesArray.pop()] !== s[i]) {
            return false
        } 
    }
    
    return parenthesesArray.length === 0 
};