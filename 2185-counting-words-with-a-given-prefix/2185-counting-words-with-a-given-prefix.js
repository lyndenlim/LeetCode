/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let resultCounter = 0
    for (let word of words) {
        if (word.slice(0, pref.length) === pref) {
            resultCounter ++
        }
    }
    return resultCounter

};