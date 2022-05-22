/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let letterCount = {}
    for (let i in s) {
        if (letterCount[s[i]]) {
            letterCount[s[i]] += 1
        } else {
            letterCount[s[i]] = 1
        }
    }

    for (let i in letterCount) {
        if (i === letter) {
            return Math.floor((letterCount[i] / s.length) * 100)
        }
    }
    return 0
};