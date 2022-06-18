/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    if (nums.reduce((prev, current) => prev + current) % 2 !== 0) return false;

  let targetNum = nums.reduce((prev, current) => prev + current) / 2;
  let sumSet = new Set();
  sumSet.add(0);

  for (let i = nums.length - 1; i >= 0; i--) {
    let nextSumSet = new Set();
    for (let total of sumSet) {
      if (total + nums[i] === targetNum) {
        return true;
      }

      nextSumSet.add(total + nums[i]);
      nextSumSet.add(total);
    }
    sumSet = nextSumSet;
  }

  return sumSet.has(targetNum);
};