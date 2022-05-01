/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
           let onlyWords = s.match(/[^ ]+/g)
    let result = []
    for (let word = 0; word < onlyWords.length; word++) {
        result.unshift(onlyWords[word])
    }

    return result.join(" ")
};