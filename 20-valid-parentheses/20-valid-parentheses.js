/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false;
  const parentheses = { "{": "}", "[": "]", "(": ")" };
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] in parentheses) {
      result.push(s[i]);
    } else if (parentheses[result.pop()] !== s[i]) {
      return false;
    }
  }
  return result.length === 0;
};