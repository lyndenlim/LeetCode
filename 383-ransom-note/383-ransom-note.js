/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let letterCount = {}
    
    for (let letter of magazine) {
        if (letterCount[letter]) {
            letterCount[letter] += 1
        } else {
            letterCount[letter] = 1
        }
    }
    
    for (let letter of ransomNote) {
        if (!letterCount[letter]) {
            return false
        } else {
            letterCount[letter]--;
        }
    }
    
    return true
};