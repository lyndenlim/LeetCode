/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let letterCount = {}
    let result = 0 
    let odd = false
    
    for (let i of s) {
        if (letterCount[i]) {
            letterCount[i] += 1
        } else {
            letterCount[i] = 1
        }
    }
    
     for (let i in letterCount) {
         if (letterCount[i] % 2 === 0) {
             result += letterCount[i]
         } else {
             result += letterCount[i] - 1
             odd = true
         }
     }
    
    return odd ? result + 1: result
};