/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maximumLength = 0
    let currentLength = 0
    let letterCount = {}
    let left = 0
    
    let i = 0
    while (i < s.length) {
        if (letterCount[s[i]]) {
            while (letterCount[s[i]]) {
                delete letterCount[s[left]]
                left ++
                currentLength--
            }
        } else {
            letterCount[s[i]] = 1 
            currentLength ++
            maximumLength = Math.max(currentLength, maximumLength)
            i ++
        }
    }
    
    return maximumLength
    
};