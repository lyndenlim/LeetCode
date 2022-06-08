/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsInfo = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in numsInfo) {
            return [i, numsInfo[target-nums[i]]]
        } else {
            numsInfo[nums[i]] = i
        }
    }
};