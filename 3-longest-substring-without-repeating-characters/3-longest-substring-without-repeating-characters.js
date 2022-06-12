/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // abcabccc res = 3
    // bbbbb res = 1
    // cookie res = 4
    
    let currentLen = 0
    let maxLen = 0
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
            maxLen = Math.max(maxLen, currentLen)
            i ++
        }
    }
    
    return maxLen
};