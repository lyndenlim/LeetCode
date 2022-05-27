/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let result = 0;
  let copyOfNum = num;
  while (copyOfNum != 0) {
    if (copyOfNum % 2 === 0) {
      copyOfNum = copyOfNum / 2;
      result++;
    } else {
      copyOfNum--;
      result++;
    }
  }

  return result;
};