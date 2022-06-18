/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    let result = ""
    let maxLen = 0
    
    for (let i = 0; i < s.length; i++) {
        let left = i
        let right = i
        
        while (left >= 0 && right <= s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                result = s.slice(left, right + 1)
                maxLen = right - left + 1     
            }
            left -= 1 
            right += 1 
        }
        
        left = i
        right = i + 1 
        
        while (left >= 0 && right <= s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                result = s.slice(left, right + 1)
                maxLen = right - left + 1     
            }
            left -= 1 
            right += 1
        }
    }
    
    return result 
    
};