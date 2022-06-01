/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
     let letterCount = {};
  for (i of nums) {
    if (letterCount[i]) {
      letterCount[i] += 1;
    } else {
      letterCount[i] = 1;
    }
  }

  for (let i in letterCount) {
    if (letterCount[i] === Math.max(...Object.values(letterCount))) {
      return i;
    }
  }
};