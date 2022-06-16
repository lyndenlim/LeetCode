/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
  let sign = 1;
  let res = 0;
  while (s[i] == " ") i++;

  if (s[i] === "+") {
    i++;
  } else if (s[i] === "-") {
    sign = -1;
    i++;
  }

  while (s[i] >= "0" && s[i] <= "9") {
    res = res * 10 + (s[i] - 0);
    if (res * sign >= 2147483647) {
      return 2147483647;
    } else if (res * sign <= -2147483648) {
      return -2147483648;
    }
    i++;
  }
  return res * sign;
};