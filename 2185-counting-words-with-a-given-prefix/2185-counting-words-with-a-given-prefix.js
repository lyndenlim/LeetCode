/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let results = 0
    for (let word of words) {
        if (word.startsWith(pref)) {
            results += 1
        } 
    } 
    return results

};