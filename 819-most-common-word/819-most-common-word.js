/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let wordCount = {}
    let splitParagraph = paragraph.split(/[^\w]/g)
    let lowerCaseWord = splitParagraph.map(word => word.toLowerCase().trim())
    for (let word of lowerCaseWord) {
        if (wordCount[word]) {
            wordCount[word] += 1
        } else if (word === "") {
            wordCount[word] = 0
        } else {
            wordCount[word] = 1
        }

    }

    banned.forEach(word => {
        if (word in wordCount) {
            wordCount[word] = 0
        }
    })

    for (let word in wordCount) {
        if (wordCount[word] === Math.max(...Object.values(wordCount))) {
            return word
        }
    }
};