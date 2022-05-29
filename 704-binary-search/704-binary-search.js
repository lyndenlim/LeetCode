/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
 if (nums.includes(target)) {
    let index = Math.ceil(nums.length / 2);
    while (nums[index] !== target) {
      if (nums[index] < target) {
        index++;
      } else {
        index--;
      }
    }
    return index;
  }
  return -1;
};