/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 0 || s.length % 2 !== 0) return false;
  let parenthesesObj = { "{": "}", "[": "]", "(": ")" };
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (parenthesesObj[s[i]]) {
      result.push(s[i]);
    } else if (s[i] !== parenthesesObj[result.pop()]) {
      return false;
    }
  }
  return result.length === 0;
};