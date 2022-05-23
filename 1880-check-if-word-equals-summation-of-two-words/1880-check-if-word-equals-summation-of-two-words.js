/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let firstWordSplit = firstWord.split("")
    let secondWordSplit = secondWord.split("")
    let targetWordSplit = targetWord.split("")
    let lettersValues = {
        "a": "0",
        "b": "1",
        "c": "2",
        "d": "3",
        "e": "4",
        "f": "5",
        "g": "6",
        "h": "7",
        "i": "8",
        "j": "9"
    }


    let valueFirstWord = ""
    let valueSecondWord = ""
    let valueTargetWord = ""
    for (let i = 0; i < firstWordSplit.length; i++) {
        if (firstWordSplit[i] in lettersValues) {
            valueFirstWord += lettersValues[firstWordSplit[i]]
        }
    }
    for (let i = 0; i < secondWordSplit.length; i++) {
        if (secondWordSplit[i] in lettersValues) {
            valueSecondWord += lettersValues[secondWordSplit[i]]
        }
    }
    for (let i = 0; i < targetWordSplit.length; i++) {
        if (targetWordSplit[i] in lettersValues) {
            valueTargetWord += lettersValues[targetWordSplit[i]]
        }
    }


    return parseInt(valueFirstWord) + parseInt(valueSecondWord) === parseInt(valueTargetWord)
};