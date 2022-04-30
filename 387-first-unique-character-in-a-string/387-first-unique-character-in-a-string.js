/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let letterCount = {}
    let splitStr = s.split("")
    for (let letter of splitStr) {
        if (letterCount[letter]) {
            letterCount[letter] += 1
        } else {
            letterCount[letter] = 1
        }
    }

    for (letter in letterCount) {
        if (letterCount[letter] === 1) {
            return s.indexOf(letter)
        } 
    }
    return -1 
};