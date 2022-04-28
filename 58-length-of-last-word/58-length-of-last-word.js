/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
        const strSplit = s.trim().split(" ")
    return strSplit[strSplit.length - 1].length
};