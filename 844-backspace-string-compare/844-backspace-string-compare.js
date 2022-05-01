/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let resultS = []
    let resultT = []
    for (let letter of s){
        if (letter !== "#") {
            resultS.push(letter)
        } else {
            resultS.pop()
        }
    }
    resultS = resultS.join("")

    for (let letter of t){
        if (letter !== "#") {
            resultT.push(letter)
        } else {
            resultT.pop()
        }
    }
    resultT = resultT.join("")

    return resultS === resultT
};