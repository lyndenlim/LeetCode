/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
     let currentLength = 0;
  let maxLength = 0;
  let left = 0;
  let letterCount = {};

  let i = 0;
  while (i < s.length) {
    if (letterCount[s[i]]) {
      while (letterCount[s[i]]) {
        delete letterCount[s[left]];
        left++;
        currentLength--;
      }
    } else {
      letterCount[s[i]] = 1;
      currentLength++;
      maxLength = Math.max(currentLength, maxLength);
      i++;
    }
  }

  return maxLength;
};