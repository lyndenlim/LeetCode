/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let word of words) {

        // let reversedWord = ""
        let reversedWord = word.split("").reverse().join("")
        // for (let letter of splitWord) {
        //     reversedWord = letter + reversedWord
        // }
        if (reversedWord === word) {
            return word
        }
    }
    return ""
};