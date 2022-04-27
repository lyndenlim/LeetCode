/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     const convertedStr = x.toString().split("")
    let reverseStr = ""
    for ( let i of convertedStr ) {
        reverseStr = i + reverseStr
    }
    
    return reverseStr * Math.sign(x) === x
};