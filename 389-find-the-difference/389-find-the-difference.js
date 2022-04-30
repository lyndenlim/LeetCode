/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let letterCountS = {}
    let letterCountT = {}
    let splitS = s.split("")
    let splitT = t.split("")

    for (let letter of splitS) {
        if (letterCountS[letter]) {
            letterCountS[letter] += 1
        } else {
            letterCountS[letter] = 1
        }
    }
    for (let letter of splitT) {
        if (letterCountT[letter]) {
            letterCountT[letter] += 1
        } else {
            letterCountT[letter] = 1
        }
    }

    for (let letter in letterCountT) {
        if (letterCountS[letter] !== letterCountT[letter]) {
            return letter
        }
    }
};