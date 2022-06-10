/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let currentLen = 0 
    let totalLen = 0 
    let left = 0 
    let letterCount = {}
    
    let i = 0 
    while (i < s.length) {
        if (letterCount[s[i]]) {
            while (letterCount[s[i]]) {
                delete letterCount[s[left]]
                left ++ 
                currentLen --
            }
        } else {
            letterCount[s[i]] = 1 
            currentLen ++
            totalLen = Math.max(currentLen, totalLen)
            i ++ 
        }
    }
    
    return totalLen
};