/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = [];
  let sorted = nums.sort((a, b) => a - b);
  let sortedSet = new Set(sorted);
  const backToArray = Array.from(sortedSet);
  for (let i = 0; i < nums.length; i++) {
    if (backToArray[i] !== i + 1 && !backToArray.includes(i + 1)) {
      result.push(i + 1);
    }
  }
  return result;
};