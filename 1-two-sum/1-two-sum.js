/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
   let targetMinusNum = {}
    for (let num of nums) {
        if (target - num in targetMinusNum) {
            if (nums.indexOf(target - num) === nums.indexOf(num)) {
                return [nums.indexOf(target - num), nums.indexOf(num, nums.indexOf(num) + 1)]
            } else {
                return [nums.indexOf(target - num), nums.indexOf(num)]
            }
        } else {
            targetMinusNum[num] = true
        }
    }
    return []
};