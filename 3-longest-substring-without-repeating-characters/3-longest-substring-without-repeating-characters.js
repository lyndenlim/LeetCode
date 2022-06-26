/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let seen = new Set()
    let left = 0 
    let maxCount = 0
    
    for (let i = 0; i < s.length; i++) {
        while (seen.has(s[i])) {
            seen.delete(s[left])
            left++;
        }
        seen.add(s[i])
        maxCount = Math.max(maxCount, seen.size)
    }
    
    return maxCount
};