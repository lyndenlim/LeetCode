/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {    
    let magazineLetterCount = {}
    
    for (let i of magazine) {
        if (magazineLetterCount[i] ) {
            magazineLetterCount[i] += 1 
        } else {
            magazineLetterCount[i] = 1
        }
    }
    
    for (let i of ransomNote) {
        if (i in magazineLetterCount) {
            magazineLetterCount[i] -= 1
            if (magazineLetterCount[i] === -1) return false
        } else {
        return false    
        }
        
    }
    return true
};