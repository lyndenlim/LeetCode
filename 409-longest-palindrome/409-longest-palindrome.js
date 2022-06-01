/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let result = 0;
  let letterCount = {};
  for (let i of s) {
    if (letterCount[i]) {
      letterCount[i] += 1;
    } else {
      letterCount[i] = 1;
    }

    if (letterCount[i] % 2 === 0) result += 2;
  }
  return s.length > result ? result + 1 : result;
};