/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   const letterCountS = {}
    const letterCountT = {}

    for (char of s) {
        if (letterCountS[char]) {
            letterCountS[char] +=1 
        } else {
            letterCountS[char] = 1
        }
    }
    for (char of t) {
        if (letterCountT[char]) {
            letterCountT[char] +=1 
        } else {
            letterCountT[char] = 1
        }
    }

    for (i in letterCountS) {
        if (letterCountT[i] !== letterCountS[i] || Object.values(letterCountS).length !== Object.values(letterCountT).length) {
            return false
        }
     
    }
       return true
    
};