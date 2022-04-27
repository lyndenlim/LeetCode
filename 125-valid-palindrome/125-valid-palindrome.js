/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    const sanitizedStr = s.replace(/[\W_]/g, "").toLowerCase();
    let reversedStr = ""
    for (let i of sanitizedStr.split("")) {
        reversedStr = i + reversedStr
    }

    return reversedStr === sanitizedStr
};