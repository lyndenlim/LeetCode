/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let seen = new Set()
    let maxCount = 0
    let left = 0
    for (let i = 0; i < s.length; i++) {
        while (seen.has(s[i])) {
            seen.delete(s[left])
            left++;
        }
        seen.add(s[i])
        maxCount = Math.max(seen.size, maxCount)
    }
    
    return maxCount
    
};