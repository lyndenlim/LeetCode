/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let sLetterCount = {}
    let odd = false
    let result = 0 
    
    for (let char of s) {
        if (sLetterCount[char]) {
            sLetterCount[char] += 1
        } else {
            sLetterCount[char] = 1
        }
    }
    
    for (let i in sLetterCount) {
        if (sLetterCount[i] % 2 === 0) {
            result += sLetterCount[i]
        } else {
            result += sLetterCount[i] - 1 
            odd = true
        }
    }
    
    return odd ? result + 1: result 
    
};