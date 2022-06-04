/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // return true if conditions are met, otherwise false
    // check if the length of s is even, if it's odd one of the brackets wont have a pair 
    // create an object that will hold the pairs of brackets
    // iterate through s and if the current element is in the object we push it to an empty array
    // if it isn't we can pop an element from the array and use it to get the value from the object to compare it to the current element
    // if it doesnt match again, return false because that tells us there a mismatch
    // otherwise when the loop ends check if the array is empty, this inform us if all pairs have a match or not
    
    if (s.length % 2 !== 0) return false
    
    let parentheses = {"{" : "}", "(": ")", "[" : "]"}
    let parenthesesArray = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] in parentheses) {
            parenthesesArray.push(s[i])
        } else if (parentheses[parenthesesArray.pop()] !== s[i]) {
            return false
        }
    }
    return parenthesesArray.length === 0 
    
};