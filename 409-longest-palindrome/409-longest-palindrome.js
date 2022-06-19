/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let letterCount = {}
    let odd = false
    let maxLen = 0 
    
    for (let i = 0; i < s.length; i++){
        if (letterCount[s[i]]) {
            letterCount[s[i]] += 1
        } else {
            letterCount[s[i]] = 1
        }
    }
    
    for (letter in letterCount) {
        if (letterCount[letter] % 2 === 0) {
            maxLen += letterCount[letter]
        } else {
            maxLen += letterCount[letter] - 1 
            odd = true
        }
    }
    
    return odd ? maxLen + 1 : maxLen
};