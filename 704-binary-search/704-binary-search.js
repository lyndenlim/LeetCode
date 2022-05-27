/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 1) {
    if (nums[0] === target) return 0;
  }

  if (nums.includes(target)) {
    let index = Math.ceil(nums.length / 2);
    while (nums[index] !== target) {
      if (nums[index] > target) {
        index--;
      } else {
        index++;
      }
    }
    return index;
  }
  return -1;
};