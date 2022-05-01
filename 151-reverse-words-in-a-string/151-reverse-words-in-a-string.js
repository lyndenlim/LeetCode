/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
           return s.match(/[^ ]+/g).reverse().join(" ")
};