/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let parentheses = {"{":"}", "[":"]", "(":")"}
    let parenthesesArray = []
    
    for (let i of s) {
        if (i in parentheses) {
            parenthesesArray.push(i)
        } else if (parentheses[parenthesesArray.pop()] !== i) {
            return false
        }
    }
    
    return parenthesesArray.length === 0 
};